const mongo=require("mongoose")



const urlSchema = new mongo.Schema({
  url: { type: String, required: true },
  shorturl: { type: String },
  visit: { type: Number, default: 0 }
});


const urlModel = mongo.model("url", urlSchema);




module.exports=urlModel;
