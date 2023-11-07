const express = require("express");
const {connection} = require("./db");
const cors = require("cors");
const fs = require('fs');
const {UserRouter} = require("./Router/User.Router");
const {ProjectRouter} = require("./Router/Project.Router");
require("dotenv").config();
const {static,header,slider,footer,navbar,react,Dynamic,angular,vue,ecomm} = require("./templates");
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

app.get("/template/static",async(req,res)=>{res.send(static)})
app.get("/template/dynamic",async(req,res)=>{res.send(Dynamic)})
app.get("/template/react",async(req,res)=>{res.send(react)})
app.get("/template/angular",async(req,res)=>{res.send(angular)})
app.get("/template/vue",async(req,res)=>{res.send(vue)})
app.get("/template/ecomm",async(req,res)=>{res.send(ecomm)})
app.get("/template/navbar",async(req,res)=>{res.send(navbar)})
app.get("/template/footer",async(req,res)=>{res.send(footer)})
app.get("/template/header",async(req,res)=>{res.send(header)})
app.get("/template/slider",async(req,res)=>{res.send(slider)})


app.listen(port , async()=>{
    try{
        await connection;
        console.log(`Successfully Connected to DB at port ${port}`);
    }
    catch(err){
        console.log(err);
    }
})