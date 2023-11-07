import React, { useEffect, useState } from 'react';
import './AddProject.css';
import { alluser,addproject } from '../../Redux/action';
import { useDispatch, useSelector } from 'react-redux';

function AddProject() {

    const user = useSelector(store=>store.reducer.curuser)
    // console.log(user);
    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(alluser());
    },[])

    const teamleads = useSelector(store=>store.reducer.userData).filter(item=>(item.designation === "teamlead"));
    const members = useSelector(store=>store.reducer.userData).filter(item=>(item.designation === "teammember"));

    console.log(members);

  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [manager,setManager] = useState({...user} || {});
  const [teamlead,setTeamlead] = useState({});
  const [teammembers,setTeam] = useState([]);
  const [tasks,settasks] = useState([]);

  const handleSubmit = (event) => {
    event.preventDefault();
    let payload = {title,description,manager,teamlead,teammembers,tasks}
    dispatch(addproject(payload))
    window.location = "/"
  };

  if(user.designation == "Project_Manager"){
    return (
    <div className="add-project-container">
      <h1>Add Project</h1>
      <form onSubmit={handleSubmit}>
        <div className="input-container">
          <label htmlFor="projectName">Project Name</label>
          <input
            type="text"
            id="projectName"
            onChange={e=>setTitle(e.target.value)}
          />
        </div>
        <div className="input-container">
          <label htmlFor="projectName">Manager</label>
          <input
            type="text"
            id="projectName"
            value={user.name}
            onChange={e=>setManager({...user})}
          />
        </div>
        <div className="input-container">
          <label htmlFor="projectName">Team Lead</label>
          <select onChange={e=>{
            let person = teamleads.filter(item=>(item._id === e.target.value))[0];
            setTeamlead({...person})
          }}>
            <option value="">Select Lead</option>
            {
                teamleads.map((item,index)=>(
                    <option key={index}  value={item._id}>{item.firstname}</option>
                ))
            }
          </select>
        </div>
        <div className="input-container">
          <label htmlFor="projectName">Team Members</label>
          <select onChange={e=>{
            let person = members.filter(item=>(item._id === e.target.value))[0];
            setTeam([...teammembers,person])
          }}>
            <option value="">Select Member</option>
            {
                members.map((item,index)=>(
                    <option key={index}  value={item._id}>{item.firstname}</option>
                ))
            }
          </select>
        </div>
        <div className="input-container">
          <label htmlFor="projectDescription">Project Description</label>
          <textarea
            onChange={e=>setDescription(e.target.value)}
            id="projectDescription"
          ></textarea>
        </div>
        <button type="submit">Create Project</button>
      </form>
    </div>
  )}
}

export default AddProject;
