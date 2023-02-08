
// notre Application EXPRESS

const express = require('express');
require('./db/db'); //include a function that connect api to data base
const app = express();  // methode express

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', '*');
    res.setHeader('Access-Control-Allow-Headers', '*');
    next();
})

app.use((req, res) => {

    const stuff = [
        {
            _id: '1234',
            title: "mon article",
            description: "description de l'article",
            imageUrl: "",
            useId: 25
        }
    ]
    res.json(stuff);
    res.status(200);
});



module.exports = app;
