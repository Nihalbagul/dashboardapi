import { useState, useEffect } from 'react';

export const useFetchProducts = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('http://localhost:3000/products.json');
                if (!response.ok) throw new Error('Failed to fetch');
                const data = await response.json();
                setProducts(data);
            } catch (err) {
                setError(`Error fetching products: ${err.message}`);
            } finally {
                setLoading(false);
            }
        };
        
        
        fetchData();
    }, []);

    return { products, loading, error };
};
