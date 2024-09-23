// ProductList.js
import React, { useContext } from 'react';
import { ProductContext } from '../context/ProductContext';
import ProductCard from './ProductCard';
import Pagination from './Pagination';
import Filter from './Filter';
import Sort from './Sort';
import SearchBar from './SearchBar';

const ProductList = () => {
    const { paginatedProducts, loading, error, currentPage, setCurrentPage, totalPages } = useContext(ProductContext);

    if (loading) return <p className="text-center text-gray-500">Loading...</p>;
    if (error) return <p className="text-red-500">Error fetching products: {error}</p>;
    if (paginatedProducts().length === 0) return <p className="text-center text-gray-500">No products available.</p>;

    return (
        <div className="container mx-auto p-5">
            <div className="mb-4">
                <SearchBar />
                <Filter />
                <Sort />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {paginatedProducts().map((product) => (
                   <div key={product.id} className="bg-gradient-to-r from-pink-200 to-purple-200 rounded-lg shadow-lg transform transition-transform hover:scale-105 hover:shadow-xl p-4">
                   <ProductCard product={product} />
               </div>
               
               
               
                ))}
            </div>
            <div className="mt-6">
                <Pagination currentPage={currentPage} totalPages={totalPages} setCurrentPage={setCurrentPage} />
            </div>
        </div>
    );
};

export default ProductList;
