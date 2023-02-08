
// notre Application EXPRESS

const express = require('express');
require('./db/db'); //include a function that connect api to data base
const app = express();  // methode express
const model = require('./Model/product')

//configuration
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', '*');
    res.setHeader('Access-Control-Allow-Headers', '*');
    next();
})
app.use(express.json());

//routes
app.post('/api/products',(req, res) => {
    const product = new model({
        ...req.body
    })

    product.save()
    .then((product)=>{
        res.json(product);
        res.status(200);
        console.log(product);
    })
    .catch(error=>{
        res.json({message: 'product not creat'});
        res.status(404);
        console.log(error); 
    })

});



module.exports = app;
