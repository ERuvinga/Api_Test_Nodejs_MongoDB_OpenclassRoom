// middleware that connect api to database

const mongoose = require('mongoose');

const URL = 'mongodb://localhost:27017/BoutiqueDB'; //Url for connection data base
const URL2 = 'mongodb://127.0.0.1:27017/BoutiqueDB'; //Url for connection data base node --version >17.x

const dataConfig = {
    useNewUrlParser: true,
    useUnifiedTopology: true
}

mongoose.set('strictQuery', true);
mongoose.connect(URL2, dataConfig)
    .then(() => {
        console.log("DataBase Connect");
    })
    .catch(error => {
        console.log(error);
    })
