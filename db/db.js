// middleware that connect api to database

const mongoose = require('mongoose');
const URL = 'mongodb://localhost:27017/BoutiqueDB'; //Url for connection data base

const dataConfig = {
    useNewUrlParser: true,
    useUnifiedTopology: true
}
mongoose.set('strictQuery', true);
mongoose.connect(URL, dataConfig)
    .then(()=>{
        console.log("database Connect");
    })

    .catch(error => {
        console.log(error);
    })