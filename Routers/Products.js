// module content routes of products endpoints
const express = require('express');
const productCtrl = require('../Controllers/products')
const router = express.Router();

// create new product in data base
router.post('/', productCtrl.createProduct);

//find all products available in data base
router.get('/', productCtrl.getAllProducts);

//find one product with Id
router.get('/:id', productCtrl.getOneProduct);

//update data of One product
router.put('/:id', productCtrl.updateProduct);

module.exports = router;