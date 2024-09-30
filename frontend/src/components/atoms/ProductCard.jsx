/* eslint-disable react/prop-types */
import { useState,useRef, useEffect} from 'react';
import EditModal from './EditModal';

const ProductCard = ({ product }) => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [selectedProduct, setSelectedProduct] = useState(null); 
    const modalRef = useRef();


    const nextImage = () => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % product.images.length);
    };

    const prevImage = () => {
        setCurrentImageIndex((prevIndex) =>
            prevIndex === 0 ? product.images.length - 1 : prevIndex - 1
        );
    };

    const openModal =()=>{
        setSelectedProduct(product);
        console.log(product);
        
    }

    const closeModal=()=>{
        if(modalRef.current){
            modalRef.current.close();
        }
        setSelectedProduct(null)
    }

    useEffect(()=>{
        if(selectedProduct && modalRef.current){
            modalRef.current.showModal()
        }
    },[selectedProduct])


    return (
        <div>
            <div className="card bg-base-200 mobile:-z-10  w-72 mobile:h-80 h-[400px] mobile:w-44 shadow-xl">
                <figure className="relative">
                    <img
                        className="w-full h-48 object-cover"
                        src={product.images[currentImageIndex]}
                        alt={product.productName}
                    />
                    {product.images.length > 1 && (
                        <>
                            <button
                                className="absolute left-2 top-1/2 transform -translate-y-1/2 btn btn-ghost text-white p-1 rounded-full"
                                onClick={prevImage}
                            >
                                ❮
                            </button>
                            <button
                                className="absolute right-2 top-1/2 transform -translate-y-1/2 btn btn-ghost text-white p-1 rounded-full"
                                onClick={nextImage}
                            >
                                ❯
                            </button>
                        </>
                    )}
                </figure>
                <div className="card-body text-gray-500">
                    <h2 className="card-title">{product.productName}</h2>
                    <p className="mobile:text-sm text-pretty">{product.description}</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-accent text-white hover:text-black" onClick={openModal}>Edit Product</button>
                    </div>
                </div>
            </div>
        
          <EditModal modalRef={modalRef} closeModal={closeModal} product={selectedProduct}/>
        </div>
    );
};

export default ProductCard;
