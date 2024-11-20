const express=require("express")
const path=require("path")
const router=express.Router();



router.route("/")
.get(async (req,res)=>{

    res.render("index")



})

module.exports=router;
