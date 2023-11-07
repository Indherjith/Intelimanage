import React from 'react';
import './ProjectCard.css'; // Import your CSS file
import { useDispatch } from 'react-redux';
import {loading,deleteProject,setproject} from "../../Redux/action";
import { useNavigate } from 'react-router-dom';

const ProjectCard = (props) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

    const Item = props.data;

    const setpro=()=>{
      let payload = {...Item};
      dispatch(setproject(payload));
      navigate(`/project/${Item._id}`)
    }

    const handleDelete=(item)=>{
      let _id = item._id;
      let payload = {_id}
      dispatch(loading());
      dispatch(deleteProject(payload))
    }
  return (
    <div className="project-card" onClick={setpro}>
      <div className="project-header">
        <h2>{Item.title}</h2>
      </div>
      <div className="project-description">
        <h3>Manager : {Item.manager.name}</h3>
        <h3>TeamLead : {Item.teamlead.name || Item.teamlead.firstname}</h3>
        <p>
          {Item.description.length > 20 ?
            `${Item.description.substring(0, 20)}...` : Item.description
          }
        </p>
      </div>
      <div className="project-footer">
        <span>Click for details</span>
        <button onClick={e=>handleDelete(Item)}>Delete</button>
      </div>
    </div>
  );
};

export default ProjectCard;
