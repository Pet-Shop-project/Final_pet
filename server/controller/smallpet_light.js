var mongoose = require("mongoose");

var express = require("express")
var router = express.Router()
var app = express()
var bodyParser = require("body-parser")

var cors = require('cors');
var parseUrlencoded = bodyParser.urlencoded({
  extended: true
});
router.delete('/delete/:id', function(req, res){
  console.log('Deleting a birds');
  mongoose.model("lightSmallpets").findByIdAndRemove(req.params.id, function(err, data){
      if(err){
          res.send("Error deleting small");
      }else{
          res.json(data);
      }
  });
});                  




router.get('/light', (req, res) => {
  mongoose.model('lightSmallpets').find((error, result) => {
    if (error) {
      console.log(error)
    }
    // console.log(result)

    res.json(result)
  })
})



router.get("/details/:id", (req, res) => {
  mongoose.model("lightSmallpets").findOne({
    _id: req.params.id
  }, (error, data) => {
    if (error) {
      console.log(error)
    }
    res.json(data)
  })
})

router.put('/update/:id', function (req, res) {
  console.log('Update a light Smallpets');
  mongoose.model("lightSmallpets").findByIdAndUpdate(req.params.id, {
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
  mongoose.model('lightSmallpets').find(function (err, data) {
    for (i = 0; i < 1; i++) {
      cats[i] = data[i];
    }
    resp.send(cats);
  })

})
router.get('/search/:name', function (req, resp) {


  var name = req.params.name;

  mongoose.model('lightSmallpets').find({
    "name": {
      "$regex": name
    }
  }, function (err, data) {
    if (data.length != 0)

      resp.json(data);
    else
      resp.send("Not found");

  })
})



router.post('/addpet', parseUrlencoded, (req, res) => {
  const lightSmallpet = mongoose.model('lightSmallpets');
  const newlightSmallpet = new lightSmallpet({
    name: req.body.name,
    size: req.body.size,
    life_span: req.body.life_span,
    weight: req.body.weight,
    color: req.body.color,
    price: req.body.price,
    temperament: req.body.temperament,
    images: req.body.images
  })

  newlightSmallpet.save((err, res) => {
    if (err) {
      console.log(err)
    }
    console.log(res)
  })
})
module.exports = router
