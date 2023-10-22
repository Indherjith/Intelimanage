const {Usermodel} = require("../Model/User.Model");
const bcrypt = require("bcrypt");
require("dotenv").config();
const jwt = require('jsonwebtoken');

const signup = async(req,res)=>{
    const {firstname,lastname,contact,designation,email,password}=req.body;

    const UA = await Usermodel.findOne({email,contact});

    if(UA?.email){
        res.send({"msg":`User Already Exist,
        Please Try to Login!`})
    }
    else{
        bcrypt.hash(password,5,async(err,hash)=>{
            if(err){
                res.send({"msg":`Something Went Wrong,
                Please Try Again Later!`})
            }
            else{
                const user = new Usermodel({
                    firstname,lastname,contact,designation,
                    password:hash,email
                })
                try{
                    await user.save();
                    res.send({"msg":"Signed Up Successfully!"})
                }
                catch(err){
                    console.log(err);
                    res.send({"msg":`Internal Error Occured,
                    Please Try Again!`})
                }
            }
        })
    }
}

const login = async(req,res)=>{
    const {email,password} = req.body;

    const user = await Usermodel.findOne({email});
    if(!user?.email){
        res.send({"msg":`User Not Exist,
        Please Signup Before Login!`})
    }
    else{
        const hash = user.password
        bcrypt.compare(password, hash, function(err, result) {
            if(err){
                res.send({"msg":`Something Went Wrong,
                Please Try Again Later`})
            }
            if(result){
                const token = jwt.sign({ userId : user._id },process.env.JWT_SECRET);
                res.json({"msg" : "Login successfull", token})
            }
            else{
                res.send("Invalid credentials, plz signup if you haven't")
            }
        });
    }
}



module.exports = {signup,login}