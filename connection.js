const mongo=require("mongoose")

async function connectWithDB(url){

return mongo.connect(url);
  

  }
module.exports={connectWithDB,}
