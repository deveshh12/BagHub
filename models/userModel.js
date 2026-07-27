const mongoose = require('moongoose');
mongoose.connect('mongodb://localhost:27017/BagShop')

const userSchema = new mongoose.Schema({
    fullname: String,
    email: String,
    password: String,
    cart: {
        type: Array,
        default: []
    },
    isAdmin: Boolean,
    orders: {
        type: Array,
        default: []
    },
    contact: Number,
    picture: String,
});

const User = mongoose.model('User', userSchema);

module.exports = User; 