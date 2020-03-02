var mongoose = require("mongoose");
var Schema = mongoose.Schema;
var normalbirds = new Schema({
    name:String,
    size:String,
    life_span:Number,
    weight:Number,
    color:String,
    price:Number,
    temperament:String,
    images:[String]},
    {collection:"normal_birds"}

);
mongoose.model("normalbirds",normalbirds); 