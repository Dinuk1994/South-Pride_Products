/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';


const CartItem = ({item}) => {
    const [quantity, setQuantity] = useState(item.quantity);
    const [availableQty , setAvailableQty] = useState()

    const products = useSelector((state)=>state.adminProducts.products)

    const checkIds = () => {
        //console.log("Products:", products);
        if (!products || !Array.isArray(products)) {
            console.error("Products array is undefined or not an array");
            return;
        }
    
        const matchedProduct = products.find(product => product._id === item.productId);
    
        if (matchedProduct) {
            const matchedWeight = matchedProduct.weightStock.find(ws => ws.weight === item.weight);
    
            if (matchedWeight) {
                console.log("Product ID matches:", matchedProduct._id);
                console.log("Matching Weight:", matchedWeight.weight);
                setAvailableQty(matchedWeight.stockQty);
            } else {
                console.log("Weight not found for this product.");
            }
        } else {
            console.log("Product ID not found.");
        }
    };
    
    //console.log(item);
    

    useEffect(()=>{
        checkIds();
    },[products])
    

    const increment = () => {
        if (quantity < availableQty) {
            setQuantity(quantity + 1);
        }
    }
    const decrement = () => setQuantity(quantity > 0 ? quantity - 1 : 0);


    return (
        <div className="flex-grow">
            <div className="w-full bg-base-300 rounded-lg h-20 border-2  border-gray-400">
                <div className="grid grid-cols-12 mobile:grid-cols-8 h-full">
                    <div className="col-span-2  w-full flex justify-center h-full items-center">
                        <img src={item.images[0]} alt="" className="size-16 ml-1 rounded-lg" />
                    </div>
                    <div className='col-span-3 mobile:col-span-2 ml-2 mobile:text-sm flex font-semibold text-center items-center'>
                        <label htmlFor="">{item.productName}</label>
                    </div>
                    <div className="col-span-3 flex items-center justify-center mobile:hidden">
                        <div className="flex">
                            <button onClick={decrement} className=" hover:bg-red-400 bg-gray-400 rounded w-6 h-6 flex items-center justify-center text-xs">-</button>
                            <span className="w-10 rounded-md bg-green-400 text-white text-center">{quantity}</span>
                            <button onClick={increment} className=" hover:bg-blue-400 bg-gray-400 rounded w-6 h-6 flex items-center justify-center text-xs">+</button>
                        </div>
                    </div>
                    <div className='col-span-2 mobile:col-span-2 mobile:text-sm  grid font-semibold text-center  items-center '>
                        <label htmlFor="">{item.weight}g</label>
                        <label htmlFor="">Rs.{item.salePrice}</label>
                    </div>
                    <div className='relative col-span-2 p-2'>
                        <button className='absolute top-0 right-0 mt-1 mr-1 text-white bg-red-400 rounded-md hover:bg-red-600 pb-[7px] pl-[5px] p-1 w-4 h-4 flex items-center justify-center'>
                            ×
                        </button>
                        <div className='absolute btn top-6 right-0 mt-1 mr-0 text-white bg-blue-400 rounded-md hover:bg-blue-600 p-1 w-16 h-8 flex items-center justify-center'>
                            Update
                        </div>
                    </div>


                </div>
            </div>
        </div>
    );
};

export default CartItem;
