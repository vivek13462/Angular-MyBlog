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
        console.log("Error getting Article Info");
    }else{
        console.log(articles);
        console.log("I am Here.!!");
        res.json(articles);
    }
          });
});

router.get('/articles/:id', function(req, res){
    console.log("Request for specific article.");
    article.findById(req.params.id)
       .exec(function(err, article) {
        if(err){
            console.log("Error fetching the article");
        } else{
            res.json(article);
        }
    });
});

router.post('/create', function(req, res) {
    console.log("Posting the article");
    var newArticle = new article();
    newArticle.title = req.body.title;
    newArticle.content = req.body.content;
    newArticle.save(function(err, article) {
        if(err) {
            console.log("Error in inserting the article");
        } else {
            res.json(article);
        }
    });
});

router.post('/update/:id', function(req, res) {
    console.log("updating the article");
    article.findById(req.params.id)
       .exec(function(err, article) {
        if(err){
            console.log("Error updating the article");
        } else{
            article.title = req.body.title;
            article.content = req.body.content;
            article.save();
            res.json(article);
        }
    });
});

router.get('/delete/:id', function(req, res){
    console.log("Deleting an article.");
    article.findByIdAndRemove(req.params.id)
       .exec(function(err, article) {
        if(err){
            console.log("Error deleting the article");
        } else{
            res.json(article);
        }
    });
});

module.exports = router;