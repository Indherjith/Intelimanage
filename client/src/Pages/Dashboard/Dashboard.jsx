import React, { useEffect } from 'react';
import './Dashboard.css';
import ProjectCard from '../../Components/Card/ProjectCard';
import { loading,projects,alluser } from '../../Redux/action';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const data = useSelector(store=>store.reducer.projects)

  useEffect(()=>{
    dispatch(loading());
    dispatch(alluser);
    dispatch(projects());
  },[])
  
  return (
    <div className="dashboard-container">
      <div style={{width:"10%",marginLeft:"90%"}}><button onClick={e=>navigate('/templates')} >Guide</button></div>
      <header className="dashboard-header">Dashboard</header>
      <div className="add"><button onClick={e=>navigate('/addProject')}>+New Project</button></div>
      <div className="dashboard-content">
        {
          data.map((item,index)=>(
            <div key={index}>
              <ProjectCard data = {item} />
            </div>            
          ))            
        }
      </div>
    </div>
  );
};

export default Dashboard;
