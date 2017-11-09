const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const aboutme = require('../models/aboutme');

const db = "mongodb://myblog:12345@ds155325.mlab.com:55325/myblogapp";

mongoose.Promise = global.Promise;
mongoose.connect(db,{ useMongoClient: true });


router.get('/all', function(req, res){
    aboutme.find({})
    .exec(function(err, aboutmeinfo) {
          if(err){
        console.log("Error getting About me Info");
    }else{
        console.log(aboutmeinfo);
        console.log("PP");
        res.json(aboutmeinfo);
    }
          });
});

module.exports = router;