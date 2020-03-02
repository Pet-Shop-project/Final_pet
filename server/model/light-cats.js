var mongoose = require("mongoose");
var Schema = mongoose.Schema;
var cats = new Schema({
    name:String,
    size:String,
    life_span:Number,
    weight:Number,
    color:String,
    price:Number,
    temperament:String,
    images:[String]
},
{collection:"light-cats"}
);
mongoose.model("light_cats",cats); 