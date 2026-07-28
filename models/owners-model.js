const mongoose = require('moongoose');

const ownerSchema = new mongoose.Schema({
    fullname: String,
    email: String,
    password: String,
    products: {
        type: Array,
        default: []
    },
    gstin: String,
    picture: String,
});

const Owner = mongoose.model('Owner', ownerSchema);

module.exports = Owner; 