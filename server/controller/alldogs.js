var express = require("express")
var route = express.Router()
var app = express()
var bodyParser = require("body-parser")
var mongoose = require("mongoose")
var cors = require('cors');
var parseUrlencoded = bodyParser.urlencoded({
  extended: true
});
route.get('/list',function(req,resp){
    mongoose.model('alldogs').find(function (err, data) {
         resp.json(data);
       
  })
  })
  route.get('/details/:_id', function (req, resp) {
    mongoose.model("alldogs").findOne({
      _id: req.params._id
    }, function (err, data) {
      resp.json(data);
    })
  })
  route.get('/search/:name',function(req,resp){

     
    var name=req.params.name;
   
   mongoose.model('alldogs').find({"name": {"$regex": name}},function(err,data){
    if(data.length!=0)
  
    resp.json(data);
    else
    resp.send("Not found");
  
   })
  })
 module.exports = route;