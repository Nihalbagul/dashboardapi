import React, { useState } from 'react';
import ProductDetailsModal from './ProductDetailsModal';

const ProductCard = ({ product }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleClick = () => {
        setIsModalOpen(true);
    };

    return (
        <>
            <div 
                className="bg-gradient-to-r from-purple-200 to-blue-200 rounded-lg shadow-lg hover:shadow-xl transform transition-transform cursor-pointer p-4 hover:scale-105"
                onClick={handleClick}
            >
                <h3 className="text-lg font-semibold text-gray-800">{product.title}</h3>
                <p className="text-gray-700 mt-1 font-medium">Price: ₹{product.price}</p>
                <p className="text-gray-600 mt-2">Popularity: {product.popularity}</p>
            </div>
            {isModalOpen && (
                <ProductDetailsModal product={product} onClose={() => setIsModalOpen(false)} />
            )}
        </>
    );
};

export default ProductCard;
