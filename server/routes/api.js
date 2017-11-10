const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const article = require('../models/article');

const db = "mongodb://bloguser:123@ds155325.mlab.com:55325/myblogapp";

mongoose.Promise = global.Promise;
mongoose.connect(db, function(err) {
    if(err) {
        console.log("Error connecting to Mongo Db");
    }
});


router.get('/all', function(req, res){
    article.find({ })
       .exec(function(err, articles) {
          if(err){
        console.log("Error getting About me Info");
    }else{
        console.log(articles);
        console.log("I am Here.!!");
        res.json(articles);
    }
          });
});

module.exports = router;