const express = require('express');

const router = express.Router();


router.get('/',(req,res)=>{
    res.render('index.ejs',{name: " "});

});

router.post('/bmi',(req,res)=>{
    var weight = req.body.weight;
    var height = req.body.height/100;
    var bmi = (weight/(height*height));
    console.log(bmi)
    switch(true){
        case(bmi<18.5):
            // res.send("UnderWeight");
            res.render('index.ejs',{name: "Underweight"});
            break;
        case(bmi>18.5 && bmi <24.9):
            // res.send("Normal");
            res.render('index.ejs',{name: "Normal"});
            break;
        case(bmi>24.9 && bmi<29.9):
            // res.send("Overweight");
            res.render('index.ejs',{name: "Overweight"});
            break;
        case(bmi>30.0):
            // res.send("Obese");
            res.render('index.ejs',{name: "Obese"});
            break;
    }
})

module.exports = router;