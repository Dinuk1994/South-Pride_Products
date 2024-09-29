import Product from "../model/product.model.js";

export const addProduct = async(req,res)=>{
  try {
    const {productName, description , category , weightStock , images} = req.body;
    const newProduct = await new Product({
        productName,
        description,
        category,
        images,
        weightStock
    })
    if(newProduct){
        await newProduct.save();
        return res.status(200).json({msg : "Product added successfully"})
    }else{
        return res.status(400).json({error : "Invalid product data"})
    }
    
  } catch (error) {
   return res.status(500).json({error : "Internal server error"})
  }
}

export const allProducts =async(req,res)=>{
    try {
        const products = await Product.find();
        if(products){
            return res.status(200).json(products)
        }else{
            return res.status(400).json({error : "No products found"})
        }
        
    } catch (error) {
        return res.status(500).json({error : "Internal server error"})
    }
}

export const getProductById =async(req,res)=>{
    try {
        const productId = req.params.id;
        const product = await Product.findById(productId);
        if(product){
            return res.status(200).json(product)
        }else{
            return res.status(400).json({error : "Product not found"})
        }

    } catch (error) {
        return res.status(500).json({error : "Internal server error"})
    }
}

export const updateProduct = async(req,res)=>{
        try {
            const productId  = req.params.id;
            const {productName, description , category , weightStock , images} = req.body;
            const product = await Product.findByIdAndUpdate(productId,{
                productName,
                description,
                category,
                images,
                weightStock
            })
            if(product){
                return res.status(200).json({msg : "Product updated successfully"})
            }else{
                return res.status(400).json({error : "Invalid product data"})
            }
        } catch (error) {
            return res.status(500).json({error : "Internal server error"})
        }
}

export const deleteById = async(req,res)=>{
    try {
        const productId  = req.params.id;
        const product = await Product.findByIdAndDelete(productId);
        if(product){
            return res.status(200).json({msg : "Product deleted successfully"})
        }else{
            return res.status(400).json({error : "Product not found"})
        }
    } catch (error) {
        return res.status(500).json({error : "Internal server error"})
    }
}


