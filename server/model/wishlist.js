var mongoose=require("mongoose")
var Schema=mongoose.Schema
var wishlist=new Schema({
    note:String,
    totalPrice:Number,
    totalQuantity:Number
    ,product_id : String,
    user:String,
    name:String
},
{
    collection: "wishlist"
}
);
mongoose.model("wishlist",wishlist)