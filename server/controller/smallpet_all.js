var express = require("express");
var mongoose = require("mongoose");
var router = express.Router();



router.get('/whole', (req, res) => {
  mongoose.model('allSmallpets').find((error, result) => {
    if (error) {
      console.log(error)
    }
    res.json(result)
  })
})

router.get("/details/:id", (req, res) => {
  mongoose.model("allSmallpets").findOne({
    _id: req.params.id
  }, (error, data) => {
    if (error) {
      console.log(error)
    }
   
    res.json(data)
  })
})
router.get('/search/:name',function(req,resp){

     
    var name=req.params.name;
   
   mongoose.model('allSmallpets').find({"name": {"$regex": name}},function(err,data){
    if(data.length!=0)
  
    resp.json(data);
    else
    resp.send("Not found");
  
   })
  })

module.exports = router
