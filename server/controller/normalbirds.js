var express = require("express")
var route = express.Router()
var app = express()
var bodyParser = require("body-parser")
var mongoose = require("mongoose")
var cors = require('cors');
var parseUrlencoded = bodyParser.urlencoded({
  extended: true
});
route.get('/list', function (req, resp) {
  mongoose.model('normalbirds').find(function (err, data) {
    resp.json(data);
    //  resp.send("data");
  })
})
route.get('/details/:_id', function (req, resp) {
  mongoose.model("normalbirds").findOne({
    _id: req.params._id
  }, function (err, data) {
    resp.json(data);
  })
})
route.delete('/delete/:id', function(req, res){

  mongoose.model("normalbirds").findByIdAndRemove(req.params.id, function(err, data){
      if(err){
          res.send("Error deleting birds");
      }else{
          res.json(data);
      }
  });
});
route.put('/update/:id', function (req, res) {
 
  mongoose.model("normalbirds").findByIdAndUpdate(req.params.id, {
      $set: {
        name: req.body.name,
        size: req.body.size,
        life_span: req.body.life_span,
        weight: req.body.weight,
        color: req.body.color,
        price: req.body.price,
        temperament: req.body.temperament,
        images: req.body.images
      }
    }, {
      new: true
    },
    function (err, updated) {
      if (err) {
        res.send("Error updating data");
      } else {
        res.json(updated);
      }
    }

  );
});
route.get('/random', function (req, resp) {

  var cats = [];
  mongoose.model('normalbirds').find(function (err, data) {
    for (i = 0; i < 1; i++) {
      cats[i] = data[i];
    }
    resp.send(cats);
  })

})
route.get('/search/:name',function(req,resp){

     
  var name=req.params.name;
 
 mongoose.model('normalbirds').find({"name": {"$regex": name}},function(err,data){
  if(data.length!=0)

  resp.json(data);
  else
  resp.send("Not found");

 })
})


    route.post('/addbird',parseUrlencoded,(req,res)=>{
      const normalbirds=mongoose.model('normalbirds');
      const newnormalbird=new normalbirds({
            name: req.body.name,
            size: req.body.size,
            life_span: req.body.life_span,
            weight: req.body.weight,
            color: req.body.color,
            price: req.body.price,
            temperament: req.body.temperament,
            images: req.body.images
      })
      
      newnormalbird.save((err,res)=>{
        if (err){
          console.log(err)
        }
        console.log(res)
      })
    })  
 module.exports = route;
