const express=require("express")
const { nanoid } = require('nanoid');
const router=express.Router();
const PORT = 8080;
const urlModel=require("../Model/url.js")

function generateShortHash() {
  return nanoid(8);  // Generates a unique 8-character ID
}


router.post("/",async (req, res) => {
    const id = req.body.SendUrl; // Use req.body.url for POST request
    console.log("req url is ", id);
    if (!id) {
      return res.status(400).send("URL is required");
    }
    const shortid = generateShortHash();
    const urlobject = new urlModel({ url: id, shorturl: shortid });
    await urlobject.save();
    console.log("Url object is ", urlobject);

    res.status(201).send(`<h1>Short URL Generated http://localhost:${PORT}/url/${shortid}</h1>`);
  })



  router.get( "/:id",async (req, res) => {
    const id = req.params.id; 
    console.log("req url is ", id);
    const result = await urlModel.findOne({ shorturl: id });
    if (result) {
      result.visit += 1;
      await result.save();
      res.status(201).redirect(result.url);
    } else {
      res.status(404).send("Short URL not found");
    }
  });
  


module.exports=router;