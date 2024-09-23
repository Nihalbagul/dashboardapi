import React, { useContext } from 'react';
import { ProductContext } from '../context/ProductContext';

const SearchBar = () => {
    const { searchQuery, setSearchQuery } = useContext(ProductContext);

    const handleChange = (e) => {
        setSearchQuery(e.target.value);
    };

    return (
        <div className="flex justify-center mb-6">
            <input
                type="text"
                placeholder="🔍 Search products by title..."
                value={searchQuery}
                onChange={handleChange}
                className="w-full max-w-md p-4 text-lg bg-gray-100 border border-gray-300 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-purple-400 transition-transform transform hover:scale-105"
            />
        </div>
    );
};

export default SearchBar;
