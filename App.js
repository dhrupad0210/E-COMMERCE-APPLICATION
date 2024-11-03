// src/App.js

import React from 'react';
import Navbar from './components/Navbar';
import ProductList from './components/ProductList';
import './styles.css';

function App() {
    return (
        <div>
            <Navbar />
            <ProductList />
        </div>
    );
}

export default App;
