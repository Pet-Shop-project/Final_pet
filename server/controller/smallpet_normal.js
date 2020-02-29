var express = require("express")
var router = express.Router()
var app = express()
var bodyParser = require("body-parser")
var mongoose = require("mongoose")
var cors = require('cors');
var parseUrlencoded = bodyParser.urlencoded({
  extended: true
});
 


router.get('/normal',(req,res)=>{
    mongoose.model('normalSmallpets').find((error,result)=>{
        if(error){
                    console.log(error)
                }
                // console.log(result)
               
                res.json(result)
            })  })

router.get("/details/:id",(req,res)=>{
    mongoose.model("normalSmallpets").findOne({_id: req.params.id},(error,data)=>{
        if(error){
            console.log(error)
        }
        // console.log(data)
        res.json(data)
    }) 
}) 
router.put('/update/:id', function(req, res){
    console.log('Update a normal Smallpets');
    mongoose.model("normalSmallpets").findByIdAndUpdate(req.params.id,
    {
        $set: {name: req.body.name,
          size: req.body.size, 
          life_span: req.body.life_span,
          weight: req.body.weight, 
          color: req.body.color, 
          price: req.body.price, 
          temperament: req.body.temperament, 
          images: req.body.images
        }
    },
    {
        new: true
    },
    function(err, updated){
        if(err){
            res.send("Error updating data");
        }else{
            res.json(updated);
        }
    }

    );
});              
router.get('/random',function(req,resp){

    var cats=[];
      mongoose.model('normalSmallpets').find(function(err,data){
        for (i=0; i<1; i++)
        {
          cats[i]=data[i];
        }
        resp.send(cats);
    })
    
    })      
    router.post('/addpet',parseUrlencoded,(req,res)=>{
        const normalSmallpet=mongoose.model('normalSmallpets');
        const newnormalSmallpet=new normalSmallpet({
              name: req.body.name,
              size: req.body.size,
              life_span: req.body.life_span,
              weight: req.body.weight,
              color: req.body.color,
              price: req.body.price,
              temperament: req.body.temperament,
              images: req.body.images
        })
        
        newnormalSmallpet.save((err,res)=>{
          if (err){
            console.log(err)
          }
          console.log(res)
        })
      })  
module.exports=router