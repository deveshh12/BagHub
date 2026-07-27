const mongoose = require('moongoose');

const productSchema = new mongoose.Schema({
    name: String,
    discount: {
        type: Number,
        default: 0
    },
    price: Number,
    image: String,
    bgcolor: String,
    panelcolor: String,
    textcolor: String,
});

const Product = mongoose.model('Product', productSchema);

module.exports = Product;
