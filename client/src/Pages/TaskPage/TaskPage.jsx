import React, {useEffect, useState} from 'react';
import './TaskPage.css'; // Import your CSS file
import TaskCard from './../../Components/TaskCard/TaskCard';
import { loading,projects,alluser,taskchange } from '../../Redux/action';
import { useDispatch, useSelector } from 'react-redux';

const TaskPage = () => {
    const dispatch = useDispatch();
    const [show,setShow] = useState(false);
    const [taskname,setTaskName] = useState('');
    const [dude,setDude] = useState('');
    const [project,setProject] = useState('');
    useEffect(()=>{
        dispatch(loading());
        dispatch(alluser());
        dispatch(projects());
      },[])
    const data = useSelector(store=>store.reducer.projects)
    const users = useSelector(store=>store.reducer.userData).filter(item=>(item.designation === "teammembers" || item.designation === "teamlead"));
    let allTask = useSelector(store=>store.reducer.tasks) ||[];

    
    const handleSave=()=>{
        let payload = {taskname,assignedto:users.filter(item=>(item._id === dude))[0],status:'pending',project}
        let currproject = data.filter(item=>(item._id === project))[0];
        currproject.tasks = [...currproject.tasks,{...payload}]
        
        dispatch(taskchange(currproject));
        window.location.reload();
    }
  return (
    <div className="task-page">
      <h1>Task Page</h1>
      {show?(<div>
        <div className="task">
            <label htmlFor="taskname">Task :</label>
            <input type="text" value={taskname} onChange={e=>setTaskName(e.target.value)}  />
        </div>
        <div className="project">
            <label htmlFor="projectname">Project :</label>
            <select onChange={e=>setProject(e.target.value)}>
                <option value="">SelectProject</option>
                {
                    data.map((item,index)=>(
                        <option key={index} value={item._id}>{item.title}</option>
                    ))
                }
            </select>
        </div>
        <div className="dude">
            <label htmlFor="dudename">Assigned To :</label>
            <select onChange={e=>setDude(e.target.value)}>
                <option value="">SelectProject</option>
                {
                    users.map((item,index)=>(
                        <option key={index} value={item._id}>{item.firstname+item.lastname}</option>
                    ))
                }
            </select>
        </div>
        <div>
            <button onClick={e=>handleSave()}>save</button>
            <button onClick={e=>setShow(false)}>cancel</button>
        </div>
      </div>):(<button onClick={e=>setShow(true)}>+New Task</button>)}
      <div style={{width:"90%"}}>
        {
            allTask.map((item,index)=>(
                <div key={index} className="task-card">
                    <TaskCard {...item} />
                </div>
            ))
        }
      </div>
    </div>
  );
};

export default TaskPage;
