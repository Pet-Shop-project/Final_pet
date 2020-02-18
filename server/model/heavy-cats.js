var mongoose = require("mongoose");
var Schema = mongoose.Schema;
var cats = new Schema({
    name:String,
    size:Number,
    life_span:Number,
    weight:Number,
    colors:String,
    price:Number,
    temperament:String,
    images:[String]
},
{collection:"heavy-cats"}
);
mongoose.model("cats",cats);