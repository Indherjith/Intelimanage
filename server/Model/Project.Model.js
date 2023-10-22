const mongoose = require("mongoose");

const ProjectSchema = new mongoose.Schema({
    title : {type:String,require:true},
    manager : {type:String,require:true},
    teamlead : {type:String,require:true},
    teammembers : {type:Array,require:true},
    tasks : {type:Array}
})

const Projectmodel = mongoose.model("Projects",ProjectSchema)

module.exports = {Projectmodel};