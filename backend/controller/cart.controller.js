import express from "express"
import Cart from "../model/cart.model.js";
import Product from "../model/product.model.js";
import User from "../model/user.model.js";


export const addToCart = async (req, res) => {
   try {
      const { userId, productId, quantity, selectedWeight } = req.body;

      if (!userId || !productId || quantity <= 0 || !selectedWeight) {
         return res.status(400).json({ msg: "Invalid data" });
      }

      const product = await Product.findById(productId);

      if (!product) return res.status(404).json({ msg: "Product not found" });

      const weightOption = product.weightStock.find(w => w.weight === selectedWeight);

      if (!weightOption) {
         return res.status(400).json({ msg: "Selected weight option not available" });
      }

      const user = await User.findById(userId);

      if (!user) return res.status(404).json({ msg: "User not found" });

      let cart = await Cart.findOne({ userId });

      if (!cart) {
         cart = new Cart({
            userId,
            cartItems: []
         });
      }

      const currentIndex = cart.cartItems.findIndex(item =>
         item.productId.toString() === productId && item.weight === selectedWeight
      );

      if (currentIndex === -1) {
         cart.cartItems.push({ 
            productId, 
            weight: selectedWeight, 
            salePrice: weightOption.salePrice, 
            quantity 
         });
      } else {
         cart.cartItems[currentIndex].quantity += quantity;
      }

      await cart.save();
      return res.status(200).json({ msg: "Cart updated successfully" });

   } catch (error) {
      return res.status(500).json({ msg: "Internal Server Error" });
   }
};



export const getCartItems = async(req, res) => {
   try {
      const { userId } = req.params;

      if (!userId) {
         return res.status(400).json({ msg: "User ID required" });
      }

      const cart = await Cart.findOne({ userId }).populate('cartItems.productId');

      if (!cart) {
         return res.status(404).json({ msg: "Cart not found" });
      }

      const validItems = cart.cartItems.filter(productItem => productItem.productId);

      if (validItems.length < cart.cartItems.length) {
         cart.cartItems = validItems;
         await cart.save();
      }

      const populatedCartItems = validItems.map(item => ({
         productId: item.productId._id,
         productName: item.productId.productName,
         description: item.productId.description,
         category: item.productId.category,
         images: item.productId.images,
         weight: item.weight, 
         salePrice: item.salePrice, 
         quantity: item.quantity
      }));

      return res.status(200).json({ data: populatedCartItems });

   } catch (error) {
      return res.status(500).json({ msg: "Internal server error", error });
   }
};


export const updateCartItems = async (req, res) => {
   try {
      const { userId } = req.params;
      const { cartItems } = req.body;

      if (!userId) {
         return res.status(400).json({ msg: "User ID required" });
      }

      if (!Array.isArray(cartItems) || cartItems.length === 0) {
         return res.status(400).json({ msg: "Cart items required" });
      }

      const cart = await Cart.findOne({ userId });

      if (!cart) {
         return res.status(404).json({ msg: "Cart not found" });
      }

      // Update cart items
      cartItems.forEach(item => {
         const existingItem = cart.cartItems.find(ci => 
            ci.productId.toString() === item.productId && ci.weight === item.weight
         );

         if (existingItem) {
            // Update quantity if item exists
            existingItem.quantity = item.quantity;
         } else {
            // Add new item if it doesn't exist
            cart.cartItems.push({
               productId: item.productId,
               quantity: item.quantity,
               salePrice: item.salePrice,
               weight: item.weight
            });
         }
      });

      // Remove items with quantity 0
      cart.cartItems = cart.cartItems.filter(item => item.quantity > 0);

      await cart.save();

      return res.status(200).json({ msg: "Cart updated successfully", cart });

   } catch (error) {
      return res.status(500).json({ msg: "Internal server error", error });
   }
};



