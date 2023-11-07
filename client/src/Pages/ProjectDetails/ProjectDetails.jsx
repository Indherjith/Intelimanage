import React, { useEffect, useState } from 'react';
import './ProjectDetails.css'; // Create a CSS file for styling
import { useDispatch, useSelector } from 'react-redux';
import {alluser,deleteProject,loading,savechange} from "../../Redux/action";
import { useNavigate } from 'react-router-dom';

const ProjectDetails = () => {
  let navigate = useNavigate();
  let dispatch = useDispatch();
  useEffect(()=>{
    dispatch(alluser())
  },[])
  
  let userall = useSelector(store=>store.reducer.userData).filter(item=>(item.designation === "teammember" || item.designation === "teamlead"))
 

  // console.log(userall);
  
  const [isEditing, setEditing] = useState(false);
  const project = useSelector(store=>store.reducer.project);
  const [title,setTitle] = useState(project.title);
  const [description,setDesc] = useState(project.description);
  const members = project.teammembers;
  const [teammembers,setTeam] = useState([...members] || []);
  console.log("project :",project);

  const handleEditClick = () => {
    setEditing(true);
  };

  const savechanges=()=>{
    let payload;
    payload = {title,description,teammembers}
    dispatch(savechange({...payload,"_id":project._id}))
    navigate("/projects")
  }

  const handleDeleteClick = () => {
    let payload = {_id:project._id}
    dispatch(loading());
    dispatch(deleteProject(payload))
    navigate("/projects")
  };

  return (
    <div className="project-details">
      <h1>Project Details</h1>
      {isEditing ? (
        <form>
          <label htmlFor="projectName">Project Name:</label>
          <input onChange={e=>setTitle(e.target.value)} value={title} type="text" id="projectName" />
          <label htmlFor="teamMembers">Add Team Members:</label>
          <select onChange={e=>{
              let curradd = userall.filter(item=>(e.target.value === item.email))
              curradd = curradd[0];
              curradd.name = curradd.firstname+curradd.lastname;
              let newTeam = teammembers.filter(item=>(item.email === e.target.value)).length==0 ? ([...teammembers,curradd]) : ([...teammembers])
              setTeam([...newTeam]);
          }}>
            <option value="">select</option>
            {
              userall.map((item,index)=>(
                <option key={index} value={item.email}>{item.firstname+item.lastname}</option>
              ))
            }
          </select>
          <label htmlFor="description">Description:</label>
          <textarea onChange={e=>setDesc(e.target.value)} value={description} id="description" rows="4" />
          <button type="submit" onClick={savechanges}>Save</button>
        </form>
      ) : (
        <div className="project-info">
          <h2>Project : {project.title}</h2>
          <h3>Manager : {project.manager.name}</h3>
          <h3>Teamlead : {project.teamlead.name || project.teamlead.firstname}</h3>
          {
            members?.map((item,index)=>(
              <div key={index}>
                <h4>Member {index+1} : {item.firstname}</h4>
              </div>
            ))
          }
          <p>Description : {project.description}</p>
        </div>
      )}
      <div className="buttons">
        {isEditing ? (
          <button onClick={() => setEditing(false)}>Cancel</button>
        ) : (
          <button onClick={handleEditClick}>Edit</button>
        )}
        <button onClick={handleDeleteClick}>Delete</button>
      </div>
    </div>
  );
};

export default ProjectDetails;
