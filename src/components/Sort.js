import React, { useContext } from 'react';
import { ProductContext } from '../context/ProductContext';

const Sort = () => {
    const { setSortOption } = useContext(ProductContext);

    const handleSortChange = (event) => {
        setSortOption(event.target.value);
    };

    return (
        <div className="flex items-center justify-between bg-gradient-to-r from-purple-100 to-blue-100 p-4 rounded-lg shadow-lg mb-6">
            <label className="font-semibold text-gray-800">Sort by:</label>
            <select
                onChange={handleSortChange}
                className="p-2 border border-gray-300 rounded-lg shadow-lg bg-white text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-transform transform hover:scale-105 hover:bg-blue-50"
            >
                <option value="default">Select</option>
                <option value="price-asc">Price: Low to High</option>
                <option value="price-desc">Price: High to Low</option>
                <option value="popularity-asc">Popularity: Low to High</option>
                <option value="popularity-desc">Popularity: High to Low</option>
            </select>
        </div>
    );
};

export default Sort;
