const {Router} = require("express");
const {projects, addproject, editproject,deleteproject} = require("../Controller/Project.Controller");

const ProjectRouter = Router();

ProjectRouter.get("/",projects);
ProjectRouter.post("/add",addproject);
ProjectRouter.patch("/edit/:id", editproject);
ProjectRouter.delete("/delete/:id",deleteproject); 

module.exports = {ProjectRouter};