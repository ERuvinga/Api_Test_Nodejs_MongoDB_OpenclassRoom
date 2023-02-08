// module content routes of products endpoints
 const express = require('express');
 const productCtrl = require('../Controllers/products')
 const router = express.Router();

 //find all products available in data base
router.get('/', productCtrl.getAllProducts);

// create new product in data base
router.post('/', productCtrl.createProduct);

module.exports = router;