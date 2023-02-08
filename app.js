
// notre Application EXPRESS

const express = require('express');
require('./db/db'); //include a function that connect api to data base
const app = express();  // methode express
const routerProduct = require('./Routers/Products')

//configuration
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', '*');
    res.setHeader('Access-Control-Allow-Headers', '*');
    next();
})
app.use(express.json());

//routes
app.use('/api/products',routerProduct);



module.exports = app;
