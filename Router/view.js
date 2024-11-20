const express=require("express")
const router=express.Router();
const urlModel=require("../Model/url.js")


router.get("/:url",async (req,res)=>{
    const requrl = req.params.url;
    console.log("Requested Url is ",requrl);
    const result = await urlModel.findOne({ shorturl: requrl });
    if (result) {
      const num = result.visit;
      res.status(201).send(`<h1>Total Number of clicks is ${num}</h1>`);
    } else {
      res.status(404).send("URL not found");
    }





})
module.exports=router