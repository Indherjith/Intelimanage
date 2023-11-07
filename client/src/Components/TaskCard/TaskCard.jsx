import React, { useState } from 'react';
import './TaskCard.css'; // Import your CSS file
import { useDispatch, useSelector } from 'react-redux';
import { taskchange } from '../../Redux/action';
import { useNavigate } from 'react-router-dom';
import * as types from "../../Redux/action.type";

const TaskCard = (props) => {
  const dispatch = useDispatch();
  const curuser = useSelector(store=>store.reducer.curuser)
  const projects = useSelector(store=>store.reducer.projects);
  let project = projects.filter(item=>(item._id === props.project))[0]
  
  let tasks = project.tasks;

  const navigate = useNavigate();

  const handlehelp=()=>{
    let template = (props.taskname).toLowerCase();
    dispatch({type:types.GUIDE,payload:template});
    navigate("/guide")
  }

  const handlestatus=()=>{
    let newtasks = tasks.filter(item=>(item.taskname !== props.taskname))
    
    newtasks.push({taskname:props.taskname,project:project._id,status:'completed',assignedto:props.assignedto})
    project.tasks = newtasks;
    
    dispatch(taskchange({...project}));
    window.location.reload();
  }
  const handlepending=()=>{
    let newtasks = tasks.filter(item=>(item.taskname !== props.taskname))
    
    newtasks.push({taskname:props.taskname,project:project._id,status:'pending',assignedto:props.assignedto})
    project.tasks = newtasks;
    
    dispatch(taskchange({...project}));
    window.location.reload();
  }
  return (
    <div className="task-card">
      <div className="task-info">
        <h2>Task : {props.taskname}</h2>
        <p>Project : {project.title}</p>
        <p>Status : {props.status}</p>
        <p>Assigned To : {props.assignedto.firstname + props.assignedto.lastname}</p>
        <div className='btns'><button onClick={e=>{
          handlehelp()
        }}>Need Help!</button>{props.status === "pending"?(<button onClick={e=>{
          if(curuser.email===props.assignedto.email){
            handlestatus()
          }else{alert("You Can't Change Others Task Status")}}}>Completed</button>):(<button onClick={e=>{
            if(curuser.email===props.assignedto.email){
              handlepending()
            }else{alert("You Can't Change Others Task Status")}}}>Make Pending</button>)}</div>
      </div>
    </div>
  );
};

export default TaskCard;
