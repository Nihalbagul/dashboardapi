import React from 'react';

const ProductDetailsModal = ({ product, onClose }) => {
    if (!product) return null;

    return (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50" onClick={onClose}>
            <div 
                className="bg-gradient-to-r from-blue-300 to-purple-300 rounded-lg shadow-lg p-4 w-56 transition-transform duration-300 ease-in-out transform scale-95 hover:scale-100"
                onClick={(e) => e.stopPropagation()}
            >
                <h2 className="text-md font-semibold text-gray-800 mb-1">{product.title}</h2>
                <p className="text-xs text-gray-700">Price: ₹{product.price}</p>
                <p className="text-xs text-gray-700">Popularity: {product.popularity}</p>
                <p className="text-xs text-gray-700 mt-1">Description: {product.description || 'No description available.'}</p>
                <button 
                    onClick={onClose} 
                    className="mt-3 px-2 py-1 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-500 transition"
                >
                    Close
                </button>
            </div>
        </div>
    );
};

export default ProductDetailsModal;
