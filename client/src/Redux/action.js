import * as types from "./action.type";
import {saveLocalData,removetoken,getLocalData} from "../Utiils/localStorage";
import axios from "axios";

export const loading=()=>(dispatch)=>{
    dispatch({type:types.LOGINREQUEST});
}

export const logins=(payload)=>(dispatch)=>{
    const {email,password} = payload;
    
        axios.post("http://localhost:5000/user/login",{email,password})
        .then(res=>{
            // console.log(res.data);
                alert(res.data.msg);
                if(res.data.token){
                    saveLocalData("token",res.data.token);
                    saveLocalData('user',{...res.data.user});
                    dispatch({type:types.USER,payload:res.data.user})
                    dispatch({type:types.LOGINSUCCESS,payload:res.data.token})
                    window.location = "/"
                }
                else{
                    dispatch({type:types.LOGINFAILURE})
                    window.location = "/auth"
                }
            
        })
        .catch(err=>{
            console.log(err);
            dispatch({type:types.LOGINFAILURE})
        })
    
}

export const signups=(payload)=>(dispatch)=>{
    const {email,password,fname,sname,contact,designation} = payload;
    
        axios.post("http://localhost:5000/user/signup",{email,password,firstname:fname,lastname:sname,designation,contact})
        .then(res=>{
                alert(res.data.msg);   
                dispatch({type:types.LOGINSUCCESS})         
        })
        .catch(err=>{
            console.log(err);
            dispatch({type:types.SIGNUPFAILURE})
        })
}

export const logouts=()=>(dispatch)=>{
    removetoken("token")
    removetoken("user")
    dispatch({type:types.LOGOUT})
    window.location.reload();
}

export const projects=()=>(dispatch)=>{
    let token = getLocalData("token");
    axios.get("http://localhost:5000/projects",{
        headers:{
            authorization:token
        }
    })
    .then(res=>{
        if(res.data.projects){
            dispatch({type:types.PROJECTSUCCESS,payload:res.data.projects})
            let projects = res.data.projects;
            let alltask = [];
            projects.map(item=>{
                alltask.push(alltask.concat(...item.tasks))
            })
            // console.log(alltask[0]);
            dispatch({type:types.TASKS,payload:[...alltask[0]]})
        }
        else{
            alert(res.data.msg)
        }
    })
    .catch(err=>{
        console.log(err);
    })
}

export const deleteProject =(payload) =>(dispatch)=>{
    let {_id} = payload;
    let token = getLocalData("token");
    axios.delete(`http://localhost:5000/projects/delete/${_id}`,{
        headers:{
            authorization:token
        }
    })
    .then(res=>{
        alert(res.data.msg)
        dispatch({type:types.PROJECTDELETE})
    })
    .catch(err=>{
        console.log(err);
        dispatch({type:types.PROJECTDELETE})
    })
    window.location.reload();
}

export const setproject=(payload)=>(dispatch)=>{
    try{
        dispatch({type:types.CURRPROJECTREQUEST})
        saveLocalData("project",payload);
        dispatch({type:types.CURRPROJECTPROCESS,payload})
        dispatch({type:types.CURRPROJECTSUCCESS})
    }
    catch{
        dispatch({type:types.CURRPROJECTFAILURE})
    }
}

export const alluser =()=>(dispatch)=>{
    axios.get(`http://localhost:5000/user`)
    .then(res=>{
        dispatch({type:types.ALLUSER,payload:res.data.users})
    })
    .catch(err=>{
        console.log(err);
    })
} 

export const savechange=(payload)=>(dispatch)=>{
    let {_id,title,description,teammembers} = payload
    let token = getLocalData("token");
    axios.patch(`http://localhost:5000/projects/edit/${payload._id}`,{title,description,teammembers},{
        headers:{
            authorization:token
        }
    })
    .then(res=>{
        console.log(res.data);
        alert(res.data.msg);
    })
    .catch(err=>{
        console.log(err);
    })
}

export const taskchange=(payload)=>(dispatch)=>{
    let token = getLocalData("token");
    axios.patch(`http://localhost:5000/projects/edit/${payload._id}`,{...payload},{
        headers:{
            authorization:token
        }
    })
    .then(res=>{
        console.log(res.data);
        alert(res.data.msg);
    })
    .catch(err=>{
        console.log(err);
    })
}

export const addproject=(payload)=>(dispatch)=>{
    let token = getLocalData("token");
    axios.post(`http://localhost:5000/projects/add/`,{...payload},{
        headers:{
            authorization:token
        }
    })
    .then(res=>{
        console.log(res.data);
        alert(res.data.msg);
    })
    .catch(err=>{
        console.log(err);
    })
}

export const getTemplate=(payload)=>(dispatch)=>{
    axios.get(`http://localhost:5000/template`,{...payload})
    .then(res=>{
        console.log(res.data);
        dispatch({type:types.TEMPLATE,payload:res.data})        
    })
    .catch(err=>{
        console.log(err);
    })
}