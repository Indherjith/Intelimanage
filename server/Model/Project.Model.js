const mongoose = require("mongoose");

const ProjectSchema = new mongoose.Schema({
    title : {type:String,require:true},
    manager : {type:Object,require:true},
    teamlead : {type:Object,require:true},
    teammembers : {type:Array,require:true},
    description : {type:String,require:true},
    tasks : {type:Array}
})

const Projectmodel = mongoose.model("Projects",ProjectSchema)

module.exports = {Projectmodel};