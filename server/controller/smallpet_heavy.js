var express = require("express");
var mongoose = require("mongoose");
var router = express.Router();



var app = express()
var bodyParser = require("body-parser")

var cors = require('cors');
var parseUrlencoded = bodyParser.urlencoded({
  extended: true
});


router.get('/heavy', (req, res) => {
  mongoose.model('heavySmallpets').find((error, result) => {
    if (error) {
      console.log(error)
    }
    // console.log(result)

    res.json(result)
  })
})


router.get("/details/:id", (req, res) => {
  mongoose.model("heavySmallpets").findOne({
    _id: req.params.id
  }, (error, data) => {
    if (error) {
      console.log(error)
    }
    // console.log(data)
    res.json(data)
  })
})
router.put('/update/:id', function (req, res) {
  console.log('Update a heavy Smallpets');
  mongoose.model("heavySmallpets").findByIdAndUpdate(req.params.id, {
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


router.get('/random', function (req, resp) {

  var cats = [];
  mongoose.model('heavySmallpets').find(function (err, data) {
    for (i = 0; i < 1; i++) {
      cats[i] = data[i];
    }
    resp.send(cats);
  })

})
router.get('/search/:name',function(req,resp){

     
    var name=req.params.name;
   
   mongoose.model('heavySmallpets').find({"name": {"$regex": name}},function(err,data){
    if(data.length!=0)
  
    resp.json(data);
    else
    resp.send("Not found");
  
   })
  })



    router.post('/addpet',parseUrlencoded,(req,res)=>{
        const heavySmallpet=mongoose.model('heavySmallpets');
        const newheavySmallpet=new heavySmallpet({
              name: req.body.name,
              size: req.body.size,
              life_span: req.body.life_span,
              weight: req.body.weight,
              color: req.body.color,
              price: req.body.price,
              temperament: req.body.temperament,
              images: req.body.images
        })
        
        newheavySmallpet.save((err,res)=>{
          if (err){
            console.log(err)
          }
          console.log(res)
        }) 
      })  
module.exports=router
