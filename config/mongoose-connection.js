const mongoose = require('mongoose');
const dbgr = require("debug")("development:mongoose-connection");
const config = require("./development.json");

mongoose
.connect(config.mongodb.url)
.then(function(){
    dbgr('Connected to MongoDB');
})
.catch(function(err){
    dbgr('Error connecting to MongoDB:', err);
})

module.exports = mongoose.connection;