// src/components/ProductList.js

import React, { useEffect, useState } from 'react';
import './styles.css';

const ProductList = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        // Fetch products from API here
        setProducts([
            { id: 1, name: 'Product 1', price: '19.99', image: 'https://via.placeholder.com/250' },
            { id: 2, name: 'Product 2', price: '29.99', image: 'https://via.placeholder.com/250' },
            // ...more products
        ]);
    }, []);

    return (
        <div className="container">
            <h1>Products</h1>
            <div className="product-list">
                {products.map((product) => (
                    <div key={product.id} className="product-card">
                        <img src={product.image} alt={product.name} />
                        <h3>{product.name}</h3>
                        <p>${product.price}</p>
                        <p><a className="button" href={`/product/${product.id}`}>View Details</a></p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ProductList;
