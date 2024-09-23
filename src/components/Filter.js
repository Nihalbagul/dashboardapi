import React, { useContext } from 'react';
import { ProductContext } from '../context/ProductContext';

const Filter = () => {
    const { setPriceRange, setPopularityRange } = useContext(ProductContext);

    const handlePriceChange = (event) => {
        setPriceRange(event.target.value);
    };

    const handlePopularityChange = (event) => {
        setPopularityRange(event.target.value);
    };

    return (
        <div className="flex flex-col md:flex-row md:justify-between bg-gradient-to-r from-purple-100 to-blue-100 p-4 rounded-lg shadow-lg mb-6">
            <div className="filter mb-4 md:mb-0">
                <label className="font-semibold text-gray-800">Filter by Price:</label>
                <select
                    onChange={handlePriceChange}
                    className="mt-1 p-2 border border-gray-300 rounded-lg shadow-lg bg-white text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-transform transform hover:scale-105 hover:bg-blue-50"
                >
                    <option value="all">All</option>
                    <option value="0-5000">0 - 5000</option>
                    <option value="5000-10000">5000 - 10000</option>
                    <option value="10000-20000">10000 - 20000</option>
                    <option value="20000+">20000+</option>
                </select>
            </div>
            <div className="filter">
                <label className="font-semibold text-gray-800">Filter by Popularity:</label>
                <select
                    onChange={handlePopularityChange}
                    className="mt-1 p-2 border border-gray-300 rounded-lg shadow-lg bg-white text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-transform transform hover:scale-105 hover:bg-blue-50"
                >
                    <option value="all">All</option>
                    <option value="0-10000">0 - 10000</option>
                    <option value="10000-30000">10000 - 30000</option>
                    <option value="30000-50000">30000 - 50000</option>
                    <option value="50000+">50000+</option>
                </select>
            </div>
        </div>
    );
};

export default Filter;
