var express =require("express");
var mongoose=require("mongoose");
var bodyParser=require("body-parser")
var route=express.Router()
 var app = express();
 var User = require('../model/user');
 var Payment = require('../model/payment')
 var bcrypt = require('bcryptjs');
 var jwt = require('jsonwebtoken');
app.use(bodyParser.urlencoded({ extended: true }));
  

// var Token = ''
// function verifytoken(req, res, next) {  
//   let token = req.query.token;
//   console.log(token)
//   jwt.verify(token, 'Secret', (err, verifytoken) => {
//     if (err)
//       return res.status(400).json({
//         Msg: 'Unauthorized'
//       })
//     if (verifytoken) {
//       Token = verifytoken;      
//       next();
//     }
//   })
// }

//  route.post("/pay",verifytoken,function(req,resp){

//     var paymentModel=mongoose.model("payment")
//     var userpay=new paymentModel()
//     userpay.card=req.body.card;
//     userpay.verification=req.body.verification;
//     mongoose.model("payment").find({
//         card:req.body.card,
//         verification:req.body.verification
//     },(function(err,data){
      
//       if(data.length == 0){
//         resp.json("code does not match")
//       }else{
//         resp.json("done pay")
       
//       }
//     }))
        
               
// })
route.post('/pay', (req, res) => {
  const {
    card,
    verification
  } = req.body
  var error;

  if (!card || !verification) {
    res.status(501).json({
      Msg: 'Please enter all fields'
    });
    console.log(card)
    console.log(verification)

  } else if (card != verification) {
    res.status(501).json({
      Msg: 'Card numbers do not match'
    });


  } else if (card.length < 15) {
    res.status(501).json({
      Msg: "Card numbers be at least 15 characters"
    });

  } else {
    //validation passed
    mongoose.model("payment").findOne({
      card: card
    }).then(user => {
      if (user) {
        res.status(501).json({
          Msg: "Card Number already exists"
        });
      } else {
        const newCard = new Payment({
         card:card,
         verification:verification
        });

        bcrypt.genSalt(10, (err, salt) => {
          bcrypt.hash(newCard.card, salt, (err, hash) => {
            newCard.card = hash;
            newCard.save()
              .then(user => {
                res.status(200).json({
                  Msg: 'Card Registerd Succesfully'
                });

              })
              .catch(err => console.log(err));
          });
        });
      }


    });

  }
})
//Login to registered account
route.post('/login', (req, res, next) => {
  const {
    card,
    verification
  } = req.body
  console.log(req.body)
  console.log("asd")
  mongoose.model("payment").findOne({
    card: card
  }).then(user => {
    console.log(user)
    if (!user) {
      res.status(501).json({
        Msg: 'Card Number Not Registered'
      });
    }
  });

});


module.exports=route;