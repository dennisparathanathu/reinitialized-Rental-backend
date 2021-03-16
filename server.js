const express = require('express');
const cors =require('cors');
const mongoose = require('mongoose');
const bodyParser = require("body-parser");
const passport = require("passport");

const users = require('./Routes/Auth/Auth');
const productroute = require('./Routes/Products/Upload')
require('dotenv').config();
//require("./config/passport")(passport);
const db = require("./models");
const Role = db.role;
const controller = require('./controllers/productbyuser.controller')
const app = express();
app.use(cors());
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

//database connection
const mongoURI = process.env.mongoURI;
const mongoEssentials = {useNewUrlParser:true, useUnifiedTopology:true,useCreateIndex:true}
mongoose.connect(mongoURI, mongoEssentials, (error)=>{
    if(error){
        console.log(error);
    }
    console.log("connection to Mongodb established successfully");
    initial();
});
// Passport middleware
app.use(passport.initialize());// Passport config



app.get('/',(req,res)=>{
    res.status(200).json({msg:"welcome to rental web server"})
})
require('./routes/auth.routes')(app);
require('./routes/user.routes')(app);
require('./routes/productbyuser.routes')(app);
require('./routes/products.routes')(app);
require('./routes/wishlist.routes')(app);


app.use(require('./Routes/Fetch/Fetch'));
app.use(require('./Routes/Products/Upload'));

const PORT = process.env.PORT || 5000;
app.listen(PORT,() =>{
    console.log(`server started at port ${PORT}`);
})
function initial() {
    Role.estimatedDocumentCount((err, count) => {
      if (!err && count === 0) {
        new Role({
          name: "user"
        }).save(err => {
          if (err) {
            console.log("error", err);
          }
  
          console.log("added 'user' to roles collection");
        });
  
        new Role({
          name: "moderator"
        }).save(err => {
          if (err) {
            console.log("error", err);
          }
  
          console.log("added 'moderator' to roles collection");
        });
  
        new Role({
          name: "admin"
        }).save(err => {
          if (err) {
            console.log("error", err);
          }
  
          console.log("added 'admin' to roles collection");
        });
      }
    });
  }
