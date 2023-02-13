//model of product in database
const mongoose = require('mongoose');
const productSchema = mongoose.Schema({
    name: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: String, required: true },
    inStock: { type: String, required: true }
})

module.exports = mongoose.model('product', productSchema);