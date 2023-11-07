const {Projectmodel} = require("../Model/Project.Model");
const {Usermodel} = require("../Model/User.Model");

const projects = async(req,res)=>{
    try{
        const data = await Projectmodel.find();
        res.send({"projects":data,"msg":"Here your projects"});
    }
    catch(err){
        console.log(err);
        res.send({"msg":`Data Not Available!`})
    }   
}

const addproject = async(req,res)=>{
    const {title,manager,teamlead,teammembers,description,tasks,userId} = req.body;
    const user = await Usermodel.findOne({_id:userId});
    try{
        if(user.designation === 'Project_Manager'){
            const project = new Projectmodel({title,manager,description,teamlead,teammembers,tasks});
            await project.save();
            res.send({"msg":"Project Created Successfully!"});
        } 
        else{
            res.send({"msg":`Manager Only has the Access to Create Project!`})
        }
    }
    catch(err){
        console.log(err);
        res.send({"msg":`Unable to Create Project!`});
    }
}

const editproject = async (req, res) => {
    const {id} = req.params
    console.log(id,req.body);
    try{
        await Projectmodel.updateOne({_id:id},{...req.body});
        res.send({ msg: "Project updated successfully"});
    }
    catch(err){
        console.log(err);
        res.send({"msg":"Unable to Edit Project, Try Again"});
    }   
  };

  const deleteproject = async (req, res) => {
    const {id} = req.params;
    console.log(id);
    await Projectmodel.deleteOne({_id: id});
    res.send({ msg: "Project Deleted successfully"});
  };

module.exports = {projects,addproject,editproject,deleteproject}