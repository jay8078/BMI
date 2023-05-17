const express = require('express');
const bodyparser = require('body-parser');
const router = require('./routes/routes');

const app = express();

app.use(bodyparser.urlencoded({extended: true}));
app.use(bodyparser.json());
app.use('/routes',router);

app.set('view-engine','ejs');

app.listen('8080',()=>{
    console.log("listening at 8080");
});