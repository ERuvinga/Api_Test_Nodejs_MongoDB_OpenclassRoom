
// any controller of products datas
const ModelProduct = require('../Model/product');

 //find all products available in data base
 exports.getAllProducts = ('/', (req, res) =>{

    ModelProduct.find()
    .then( data =>{
        res.status(200);
        //res.json({products: data});
        console.log(data);
    })
    .catch(error =>{
        res.status(404);
        res.json({error});
        console.log(error);
    })
});

// create new product in data base
exports.createProduct = (req, res) => {
    const product = new ModelProduct({
        ...req.body
    })

    product.save()
    .then((product)=>{
        res.json({product});
        res.status(200);
    })
    .catch(error=>{
        res.json({message: 'product not creat'});
        res.status(404);
        console.log(error); 
    })

}