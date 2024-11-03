// User.js
const mongoose = require('mongoose');
const userSchema = new mongoose.Schema({
    name: String,
    email: { type: String, unique: true },
    password: String,
    isAdmin: { type: Boolean, default: false }
});
module.exports = mongoose.model('User', userSchema);

// Product.js
const productSchema = new mongoose.Schema({
    name: String,
    description: String,
    price: Number,
    stock: Number,
    category: String
});
module.exports = mongoose.model('Product', productSchema);
