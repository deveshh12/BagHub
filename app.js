const express = require('express');
const app = express();

const cookieParser = require('cookie-parser');
const path = require('path');

const db = require('./config/mongoose-connection');

const ownersRouter = require('./routes/owners');
const usersRouter = require('./routes/users');
const productsRouter = require('./routes/products');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.set("view engine", "ejs");

app.use("/owners", ownersRouter);
app.use("/users", usersRouter);
app.use("/products", productsRouter);

app.get('/', (req, res) => {
    res.send('hello');
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});