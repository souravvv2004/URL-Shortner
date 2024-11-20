const express = require("express");
const {connectWithDB}=require("./connection.js")
const urlRouter=require("./Router/routeurl.js")
const viewRouter=require("./Router/view.js")
const static=require("./Router/staticfile.js")
const userRouter=require("./Router/userRouter.js")
const path=require("path")


const app = express();
const PORT = 8080;
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, 'public')));




connectWithDB(process.env.URL);
  
app.use("/",static);


app.use("/url",urlRouter);
app.use("/user",userRouter);
app.use("/view",viewRouter);


app.listen(PORT, () => {
  console.log(`Server Started at :${PORT}`)})
