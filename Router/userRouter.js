const express=require("express");
const router=express.Router();
const user=require("..//Model/user")


router.route("/handleLogin")
.get((req,res)=>{


    res.status(201).render("login");



})
.post(async(req,res)=>{
    const Email=req.body.Email;
    const Password=req.body.password;
    const user=user.findOne({Email,Password});
    if(!user){res.render("login",{
        error:"Invalid Username or Password"
    })}
    return res.render("index");
    
  



})
router.route("/handleSignup")
.get((req,res)=>{
    

    res.status(201).render("signup");



})

.post(async(req,res) =>{
console.log("Data Received is ",req.body);
const data=new user(req.body);
await data.save();
res.redirect("/");






})

module.exports=router;