var express = require("express");
var bodyParser = require("body-parser");
var route = express.Router();
var mongoose = require("mongoose");
var bcrypt = require("bcryptjs");
var jwt = require('jsonwebtoken');
var events = require('events');
var eventEmitter = new events.EventEmitter();
let socketIO = require('socket.io')

let io = socketIO();
var allshoppets = require('../model/allshoppets')
var cart=require('../model/cart')

var User = require('../model/user');
var parseUrlencoded = bodyParser.urlencoded({
  extended: true
});

var Token = ''
let userdata;

function verifytoken(req, res, next) {
  let token = req.query.token;
 
  jwt.verify(token, 'Secret', (err, verifytoken) => {
    if (err)
      return res.status(400).json({
        Msg: 'Unauthorized'
      })
    if (verifytoken) {
      Token = verifytoken;
      next();
    }
  })
}

route.get("/add/:id/:price/:name",verifytoken,function(req,resp,next){
  // console.log(req.headers);
 
  console.log(Token.useremail)
 
// User.find({email:Token.useremail}).then(user=>{
//   userdata=user;

// })
  cartId=Token.useremail
  // console.log(Token);
  
  productId=req.params.id
  productPrice=parseInt(req.params.price);
  productName=req.params.name;
  // console.log(req.query.images);
  console.log(productId)
  console.log(productPrice);
  console.log(productName)
  
  
  const productAddedToCart = {
      price:productPrice,
      name:productName,
      quantity: 1,
      _id:productId,
      images:req.query.images
  }
  
  mongoose.model('cart').findOne({user:cartId , product_id :req.params.id },(err,cart)=>{

      if (!cart){
          var cartModel = mongoose.model("cart")
          var cart = new cartModel()
          cart.product_id=req.params.id // change to object of allshoppets
          cart.totalPrice=productPrice;
          cart.totalQuantity=1;
          cart.user=cartId;
          cart.name=productName;
          cart.save(function(err,data){
          resp.send(data);
          console.log(data);
          })
          console.log("Iam Heree save")
      
      
      }else{
               cart.totalQuantity+=1;
                cart.totalPrice+=productPrice
                mongoose.model('cart').updateOne({user:cartId,product_id : req.params.id},{$set: cart},(err,data)=>{
                    if(err){
                      console.log(err)
                    }
                        console.log(data)
                        console.log(cart)
                        console.log("Iam Heree Update")
       
                   
                })
              }
      //     var indexOfProduct=-1;
      //     //update quantity ++ in database
      //     for (let i=0; i<cart.products.length; i++){
      //         if(req.params.id===cart.products[i]._id){
      //             indexOfProduct=i;
      //             console.log("you have added this to cart already");
      //             break;
      //         }
      //         }
      //     if(indexOfProduct>=0){
      //         console.log("this product is in your cart , need to update "+indexOfProduct)
      //         cart.products[indexOfProduct].quantity+=1
      //         // console.log(cart.products[indexOfProduct].quantity)
      //         cart.products[indexOfProduct].price+=productPrice;
      //         cart.totalQuantity+=1;
      //         cart.totalPrice+=productPrice
      //         mongoose.model('cart').updateOne({user:cartId},{$set: cart},(err,data)=>{
      //             if(err){
      //               console.log(err)
      //             }
      //                 console.log(data)
      //                 console.log(cart)
                 
      //         })
              
      //     }else{
      //         console.log("no this isn'i't in your cart lets add it")
      //         cart.totalQuantity=cart.totalQuantity +1;
      //         cart.totalPrice= cart.totalPrice + productPrice
      //         cart.products.push(productAddedToCart)
      //         mongoose.model('cart').updateOne({user:cartId},{$set: cart},(err,data)=>{
      //             if(err){
      //               console.log(err)
      //             }
      //                 console.log(data)
      //                 console.log(cart)
                 
      //         })
              
      //     }
      //     console.log(indexOfProduct)
      // }
  })
  
})

route.get('/details',verifytoken, function (req, resp) {
  if(req.query.token != null){
      cartId=Token.useremail
   mongoose.model("cart").find({user : cartId}, function (err,data){
      if (!err){
          console.log(Token.useremail);
           resp.status(200).send(data)
          console.log(data)
      }else{
          console.log(err)
      }
  })
} else {
  resp.status(200).json('no user login')
}
    
})
// socket

  route.get('/deleteItem/:id',verifytoken, function (req, resp) {
    cartId=Token.useremail
    mongoose.model('cart').deleteOne({user:cartId},{ $pull:{ products :{product_id:req.params.id} } 
    },()=>console.log("deleted"+req.params.id)
    )
  
    resp.end()
  })


// Bind the connection event with the listner1 function


// socket
route.get('/clear',verifytoken,function(req, resp){
  cartId=Token.useremail
  mongoose.model("cart").remove({user:cartId},(err,data)=>console.log(data))
  resp.end()
      
})
// router.get('/show', function (req, res) {
//   req.newUser
//     .populate('cart.items.productId')
//     .execPopulate() //to return promis
//     .then(newUser => {
//       const products = newUser.cart.items;
//       res.json(products);
//       console.log(req.newUser)

//     })
//     .catch(err => console.log(err));
// })

/*route.get('/cart/:id',verifytoken , function (req, res) {
  // token=req.body.token;
  // console.log(Token);
  
  var id = req.params.id;
  var _id=req.body.proId
  let userdata;
  console.log(Token.useremail)
 
User.find({email:Token.useremail}).then(user=>{
  userdata=user;

})
  allshoppets.findById(id)
    .then(product => {
      console.log(product);
      return userdata.addToCart(product);
    }).then(result => {
      console.log(result);
    });

})
*/

// router.get('/deleteCart/:id', function (req, res) {
//   var id = req.params.id;
//   req.user
//     .removeFromCart(id).then(result => {
//       console.log('item Deleted');
//     })
//     .catch(err => console.log(err));
// })
module.exports = route;
