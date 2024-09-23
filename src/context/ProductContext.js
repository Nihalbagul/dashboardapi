import React, { createContext, useState, useEffect } from 'react';

export const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
    const [products, setProducts] = useState([]);
    const [filteredProducts, setFilteredProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [priceRange, setPriceRange] = useState('all');
    const [popularityRange, setPopularityRange] = useState('all');
    const [sortOption, setSortOption] = useState('default');
    const [currentPage, setCurrentPage] = useState(1);
    const [searchQuery, setSearchQuery] = useState(''); // New state for search query
    const [selectedProduct, setSelectedProduct] = useState(null); // New state for selected product
    const PRODUCTS_PER_PAGE = 20;

    useEffect(() => {
        // fetch('http://localhost:3000/products.json')
        fetch('/products.json')
            .then((response) => response.json())
            .then((data) => {
                const productsArray = Object.values(data.products);
                setProducts(productsArray);
                setFilteredProducts(productsArray);
                setLoading(false);
            })
            .catch((err) => {
                setError(err);
                setLoading(false);
            });
    }, []);

    const filterAndSortProducts = () => {
        let filtered = products;

        // Filtering by price range
        if (priceRange !== 'all') {
            const [minPrice, maxPrice] = priceRange.split('-').map(Number);
            filtered = filtered.filter((product) => {
                const price = Number(product.price);
                return maxPrice ? price >= minPrice && price < maxPrice : price >= minPrice;
            });
        }

        // Filtering by popularity range
        if (popularityRange !== 'all') {
            const [minPopularity, maxPopularity] = popularityRange.split('-').map(Number);
            filtered = filtered.filter((product) => {
                const popularity = Number(product.popularity);
                return maxPopularity ? popularity >= minPopularity && popularity < maxPopularity : popularity >= minPopularity;
            });
        }

        // Filtering by search query
        if (searchQuery) {
            filtered = filtered.filter((product) =>
                product.title.toLowerCase().includes(searchQuery.toLowerCase())
            );
        }

        // Sorting logic
        if (sortOption === 'price-asc') {
            filtered.sort((a, b) => Number(a.price) - Number(b.price));
        } else if (sortOption === 'price-desc') {
            filtered.sort((a, b) => Number(b.price) - Number(a.price));
        } else if (sortOption === 'popularity-asc') {
            filtered.sort((a, b) => Number(a.popularity) - Number(b.popularity));
        } else if (sortOption === 'popularity-desc') {
            filtered.sort((a, b) => Number(b.popularity) - Number(a.popularity));
        }

        setFilteredProducts(filtered);
    };

    useEffect(() => {
        filterAndSortProducts();
    }, [priceRange, popularityRange, sortOption, products, searchQuery]);

    const paginatedProducts = () => {
        const startIndex = (currentPage - 1) * PRODUCTS_PER_PAGE;
        return filteredProducts.slice(startIndex, startIndex + PRODUCTS_PER_PAGE);
    };

    const totalPages = Math.ceil(filteredProducts.length / PRODUCTS_PER_PAGE);

    return (
        <ProductContext.Provider
            value={{
                paginatedProducts,
                loading,
                error,
                currentPage,
                setCurrentPage,
                totalPages,
                setPriceRange,
                setPopularityRange,
                setSortOption,
                searchQuery, // Expose the search query
                setSearchQuery, // Expose the function to set the search query
                selectedProduct, // Expose the selected product
                setSelectedProduct, // Function to set the selected product
            }}
        >
            {children}
        </ProductContext.Provider>
    );
};
