var express = require("express");
var mongoose = require("mongoose");
var fs = require("fs");
var cors = require('cors');
var bcrypt = require('bcryptjs');
var jwt = require('jsonwebtoken');
var app = express();

var bodyParser = require('body-parser')








var lightdogs = require("./controller/lightdogs");
var normaldogs = require("./controller/normaldogs");
var heavydogs = require("./controller/heavydogs");
var alldogs = require("./controller/alldogs");
var allcats=require("./controller/allcats")
var accessories = require("./controller/accessories");
var smallpet_heavy=require('./controller/smallpet_heavy');
var smallpet_light=require('./controller/smallpet_light');
var smallpet_normal=require('./controller/smallpet_normal');
var heavybirds=require("./controller/heavybirds");
var lightbirds=require("./controller/lightbirds");
var normalbirds=require("./controller/normalbirds");
var allbirds=require("./controller/allbirds")
var smallpet_heavy=require('./controller/smallpet_heavy')
var smallpet_light=require('./controller/smallpet_light')
var smallpet_normal=require('./controller/smallpet_normal')
let heavy_cats=require("./controller/heavy-cats")
let light_cats=require("./controller/light-cats")
let normal_cats=require('./controller/normal-cats')
var smallpet_all=require('./controller/smallpet_all')
var shopcart = require('./controller/shopcart')
var sort_heavy_cat=require("./controller/sort-heavycat")
var user=require('./controller/user')
var User=require('./model/user')
var payment=require('./controller/payment')
var admin=require('./controller/admin')
var sort=require("./controller/sort")
var wishlist=require("./controller/wishlist");

app.use(cors());
app.use("/PET-SHOP/sort-heavycat", sort_heavy_cat);
app.use('/PET-SHOP/heavy_pet',smallpet_heavy)
app.use('/PET-SHOP/light_pet',smallpet_light)
app.use('/PET-SHOP/normal_pet',smallpet_normal)
app.use('/PET-SHOP/all_pet',smallpet_all)
app.use("/PET-SHOP/sort",sort);
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use("/PET-SHOP/lightdogs", lightdogs);
app.use("/PET-SHOP/normaldogs", normaldogs);
app.use("/PET-SHOP/heavydogs", heavydogs);
app.use("/PET-SHOP/alldogs", alldogs);
app.use("/PET-SHOP/allcats", allcats)
app.use("/PET-SHOP/accessories",accessories)
app.use("/PET-SHOP/heavy_cats", heavy_cats);
app.use("/PET-SHOP/light_cats", light_cats);
app.use("/PET-SHOP/normal_cats", normal_cats);
app.use('/PET-SHOP/heavy_pet',smallpet_heavy);
app.use('/PET-SHOP/light_pet',smallpet_light);
app.use('/PET-SHOP/normal_pet',smallpet_normal);
app.use('/PET-SHOP/heavybirds',heavybirds);
app.use('/PET-SHOP/lightbirds',lightbirds);
app.use('/PET-SHOP/normalbirds',normalbirds);
app.use('/PET-SHOP/allbirds',allbirds);
app.use("/PET-SHOP/user", user);
app.use("/PET-SHOP/shopcart",shopcart);
app.use("/PET-SHOP/payment",payment);
app.use("/PET-SHOP/admin",admin);
app.use("/PET-SHOP/wishlist",wishlist)
app.use(express.static("public"));


app.all('*', function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'DELETE, HEAD, GET, OPTIONS, POST, PUT');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  next();
});
app.all("*", (req, resp, next) => {
  resp.status(404).send("cant find this url");
});


app.set("viewengine", "ejs");
app.set("views", "./views");
mongoose.connect("mongodb+srv://petshop:AAAAA@cluster0-mv8zv.mongodb.net/Pet_shop?retryWrites=true&w=majority",{ useNewUrlParser: true ,useUnifiedTopology: true}).then(()=> console.log("Up"))
.then(()=>console.log("Database Connected"));




mongoose.connection.on("error", err => {
  console.error(`MongoDB connection error: ${err}`);
  process.exit(1);
});



var files_arr = fs.readdirSync(__dirname + "/model");
files_arr.forEach(function (file) {
  require(__dirname + "/model/" + file);
});
app.use(express.urlencoded ({extended : false}));
app.listen(3000, function () {
  console.log("server on port 3000");

});
