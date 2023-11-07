import { getLocalData } from "../Utiils/localStorage";
import * as types from "./action.type";

const initstate = {
    isAuth: getLocalData("token") ? true : false,
    token: getLocalData("token") || "",
    isLoading: false,
    isError: false,
    userData: [],
    projects:[],
    curuser : getLocalData("user") || {},
    project:getLocalData("project")|| {},
    tasks : [],
    template:'',
    guide:''
};

const reducer = (state=initstate,action)=>{
    const {type,payload} = action;
    switch(type){

        case types.LOGINREQUEST : return {...state, isLoading :true}

        case types.LOGINSUCCESS : return {...state, isLoading :false, isAuth :true}

        case types.LOGINFAILURE : return {...state, isLoading :false, isError :true, isAuth :false}

        case types.SIGNUPREQUEST : return {...state, isLoading :true}

        case types.SIGNUPSUCCESS : return {...state, isLoading :false}

        case types.SIGNUPFAILURE : return {...state, isLoading :false, isError :true, isAuth :false}

        case types.LOGOUT : return {...state,isAuth:false};

        case types.PROJECTSUCCESS : return {...state,projects:payload,isLoading:false,isError:false};

        case types.PROJECTFAILURE : return {...state,isError:true, isLoading:false};

        case types.PROJECTDELETE : return {...state,isLoading:false,isError:false};

        case types.CURRPROJECTREQUEST : return {...state,isLoading:true,isError:false};

        case types.CURRPROJECTPROCESS : return {...state,project:payload};

        case types.CURRPROJECTSUCCESS : return {...state,isLoading:false,isError:false};

        case types.CURRPROJECTFAILURE : return {...state,isLoading:false,isError:true};

        case types.USER : return {...state,curuser:payload};

        case types.ALLUSER : return {...state,userData:payload};

        case types.TASKS : return {...state,tasks:payload};

        case types.TEMPLATE : return {...state,template:payload};

        case types.GUIDE : return {...state,guide:payload};

        default : return{ ...state };
    }
}

export {reducer};