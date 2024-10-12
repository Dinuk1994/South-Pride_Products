/* eslint-disable react/prop-types */
import { useState } from 'react';
import Image from '../../../assets/AuthImage.jpg';

const CartItem = () => {
    const [quantity, setQuantity] = useState(1);

    const increment = () => setQuantity(quantity + 1);
    const decrement = () => setQuantity(quantity > 0 ? quantity - 1 : 0);


    return (
        <div className="flex-grow">
            <div className="w-full bg-base-300 rounded-lg h-20 border-2  border-gray-400">
                <div className="grid grid-cols-12 mobile:grid-cols-8 h-full">
                    <div className="col-span-2  w-full flex justify-center h-full items-center">
                        <img src={Image} alt="" className="size-16 ml-1 rounded-lg" />
                    </div>
                    <div className='col-span-3 mobile:col-span-2 mobile:text-sm flex font-semibold text-center items-center'>
                        <label htmlFor="">Roasted Currypowder</label>
                    </div>
                    <div className="col-span-3 flex items-center justify-center mobile:hidden">
                        <div className="flex">
                            <button onClick={decrement} className=" hover:bg-red-400 bg-gray-400 rounded w-6 h-6 flex items-center justify-center text-xs">-</button>
                            <span className="w-10 rounded-md bg-green-400 text-white text-center">{quantity}</span>
                            <button onClick={increment} className=" hover:bg-blue-400 bg-gray-400 rounded w-6 h-6 flex items-center justify-center text-xs">+</button>
                        </div>
                    </div>
                    <div className='col-span-2 mobile:col-span-2 mobile:text-sm  grid font-semibold text-center  items-center '>
                        <label htmlFor="">250g</label>
                        <label htmlFor="">3200$</label>
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
