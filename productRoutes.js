const express = require('express');
const Product = require('../models/Product');
const router = express.Router();

// Create Product
router.post('/product', async (req, res) => {
    const product = new Product(req.body);
    await product.save();
    res.send("Product created");
});

// Get all products
router.get('/products', async (req, res) => {
    const products = await Product.find();
    res.json(products);
});

// Get single product by ID
router.get('/product/:id', async (req, res) => {
    const product = await Product.findById(req.params.id);
    res.json(product);
});

module.exports = router;
