var mongoose = require("mongoose");
var Schema = mongoose.Schema;
var allcats = new Schema({
    name:String,
    size:Number,
    life_span:Number,
    weight:Number,
    color:String,
    price:Number,
    temperament:String,
    images:[String]
},
{collection:"all-cats"}
);
mongoose.model("allcats",allcats);