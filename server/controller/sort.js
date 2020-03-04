var express = require("express");
var bodyParser = require("body-parser");
var router = express.Router();
var mongoose = require("mongoose");
var bcrypt = require("bcryptjs");
var parseUrlencoded = bodyParser.urlencoded({
  extended: true

}); 

router.get('/listcat_heavy',function(req,resp){

    mongoose.model('cats').find(function (err, data) {

        resp.json(data) 
  }).sort({price:1})


  })
  router.get('/listcat_light',function(req,resp){

    mongoose.model('light_cats').find(function (err, data) {

        resp.json(data) 
  }).sort({price:1})


  })
  router.get('/listdog_heavy',function(req,resp){

    mongoose.model('heavydogs').find(function (err, data) {

        resp.json(data) 
  }).sort({price:1})


  })
  router.get('/listdog_light',function(req,resp){

    mongoose.model('lightdogs').find(function (err, data) {

        resp.json(data) 
  }).sort({price:1})


  })
  router.get('/listdog_norm',function(req,resp){

    mongoose.model('normaldogs').find(function (err, data) {

        resp.json(data) 
  }).sort({price:1})


  })


router.get('/listbirds_norm',function(req,resp){

    mongoose.model('normalbirds').find(function (err, data) {

        resp.json(data) 
  }).sort({price:1})


  })
  router.get('/listbirds_light',function(req,resp){

    mongoose.model('lightbirds').find(function (err, data) {

        resp.json(data) 
  }).sort({price:1})


  })
  router.get('/listbirds_hvy',function(req,resp){

    mongoose.model('heavy_birds').find(function (err, data) {

        resp.json(data) 
  }).sort({price:1})
// pets

  })
  router.get('/listpets_hvy',function(req,resp){

    mongoose.model('heavySmallpets').find(function (err, data) {

        resp.json(data) 
  }).sort({price:1})


  })
  router.get('/listpets_light',function(req,resp){

    mongoose.model('lightSmallpets').find(function (err, data) {

        resp.json(data) 
  }).sort({price:1})


  })
  router.get('/listpets_norm',function(req,resp){

    mongoose.model('normalSmallpets').find(function (err, data) {

        resp.json(data) 
  }).sort({price:1})


  })
module.exports = router;

