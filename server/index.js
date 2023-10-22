const express = require("express");
const {connection} = require("./db");
const cors = require("cors");
const {UserRouter} = require("./Router/User.Router");
const {ProjectRouter} = require("./Router/Project.Router");
require("dotenv").config();
const jwt = require("jsonwebtoken");


const authenticated = (req, res, next) => {
    if (!req.headers.authorization) {
       res.send({"msg":"Please Signin First"});
    }
    else{
        const user_token = req.headers.authorization;
        jwt.verify(user_token, process.env.JWT_SECRET, function (err, decoded) {
            if (err) {
                return res.send({"msg":`Something went wrong, Please Signin again!`});
            }
            else{
                req.body.userId=decoded.userId
                next();
            }
        })
  };
  };


const app = express();
let port = process.env.PORT || 8080;

app.use(cors());
app.use(express.json());
app.use("/user",UserRouter);
app.use("/projects",authenticated,ProjectRouter);

app.get("/",(req,res)=>{
    res.send(`Hey People, 
    Here is a server for Intelimanage!`)
})



app.listen(port , async()=>{
    try{
        await connection;
        console.log(`Successfully Connected to DB at port ${port}`);
    }
    catch(err){
        console.log(err);
    }
})