const {Projectmodel} = require("../Model/Project.Model");
const {Usermodel} = require("../Model/User.Model");

const projects = async(req,res)=>{
    try{
        const data = await Projectmodel.find();
        res.send(data);
    }
    catch(err){
        console.log(err);
        res.send(`Data Not Available!`)
    }   
}

const addproject = async(req,res)=>{
    const {title,manager,teamlead,teammembers,tasks,userId} = req.body;
    const user = await Usermodel.findOne({_id:userId});
    try{
        if(user.designation === 'Project_Manager'){
            const project = new Projectmodel({title,manager,teamlead,teammembers,tasks});
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
    try{
        await Projectmodel.updateOne({_id:id},{...req.body});
        res.send({ message: "Project updated successfully"});
    }
    catch(err){
        console.log(err);
        res.send({"msg":"Unable to Edit Project, Try Again"});
    }   
  };

  const deleteproject = async (req, res) => {
    const {id} = req.params;
    await Projectmodel.deleteOne({_id: id});
    res.send({ message: "Project Deleted successfully"});
  };

module.exports = {projects,addproject,editproject,deleteproject}