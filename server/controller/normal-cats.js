var express = require("express");
var bodyParser = require("body-parser");
var router = express.Router();
var mongoose = require("mongoose");
var bcrypt = require("bcryptjs");

var parseUrlencoded = bodyParser.urlencoded({
  extended: true
});

router.get('/listcat', function (req, resp) {
  mongoose.model('normal_cats').find(function (err, data) {



    resp.json(data);

  })
})

router.get('/details/:_id', function (req, resp) {


  var _id = req.params._id;

  mongoose.model('normal_cats').findOne({
    _id: _id
  }, function (err, data) {

    resp.json(data);

  })

})
router.put('/update/:id', function (req, res) {
  console.log('Update a normal cats');
  mongoose.model("normal_cats").findByIdAndUpdate(req.params.id, {
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


router.get('/search/:name',function(req,resp){

     
  var name=req.params.name;
 
 mongoose.model('normal_cats').find({"name": {"$regex": name}},function(err,data){
  if(data.length!=0)

  resp.json(data);
  else
  resp.send("Not found");

 })
})
 
  router.get('/random',function(req,resp){

    var cats=[];
      mongoose.model('normal_cats').find(function(err,data){
        for (i=0; i<1; i++)
        {
          cats[i]=data[i];
        }
        resp.send(cats);
    })
    
    })

    router.post('/addnormal',parseUrlencoded,(req,res)=>{
      const normalcats=mongoose.model('normal_cats'); 
      const newnormalcats=new normalcats({
            name: req.body.name,
            size: req.body.size,
            life_span: req.body.life_span,
            weight: req.body.weight,
            color: req.body.color,
            price: req.body.price,
            temperament: req.body.temperament,
            images: req.body.images
      })
      
      newnormalcats.save((err,res)=>{
        if (err){
          console.log(err)
        }
        console.log(res)
      })
    })  
module.exports = router;
