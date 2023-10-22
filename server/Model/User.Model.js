const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
    firstname : {type:String,require:true},
    lastname : {type:String,require:true},
    email : {type:String,require:true},
    contact : {type:String,require:true},
    designation : {type:String,require:true},
    password : {type:String,require:true},
    projecton : {type:Array},
    projectoff : {type:Array}
})

const Usermodel = mongoose.model("Employees",UserSchema)

module.exports = {Usermodel};