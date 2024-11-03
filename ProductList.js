import React, { useEffect, useState } from 'react';
import { fetchProducts } from '../services/api';

const ProductList = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const getProducts = async () => {
            const response = await fetchProducts();
            setProducts(response.data);
        };
        getProducts();
    }, []);

    return (
        <div>
            {products.map((product) => (
                <div key={product._id}>
                    <h3>{product.name}</h3>
                    <p>{product.description}</p>
                    <p>${product.price}</p>
                </div>
            ))}
        </div>
    );
};

export default ProductList;
