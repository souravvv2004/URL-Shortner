const mongo=require("mongoose");
const userSchema=

new mongo.Schema({




    Name:{type:String},
    Email:{type:String},
    password:{type:String}

});


const user=mongo.model("User",userSchema);
module.exports=user;