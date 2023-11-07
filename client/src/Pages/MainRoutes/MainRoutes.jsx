import React from 'react'
import {Routes,Route} from "react-router-dom"
import HomePage from './../HomePage/Homepage';
import AuthPage from './../AuthPage/AuthPage';
import RequireAuth from '../../hoc/RequireAuth';
import Dashboard from '../Dashboard/Dashboard';
import Error from '../Error';
import ProjectDetails from '../ProjectDetails/ProjectDetails';
import TaskPage from '../TaskPage/TaskPage';
import AddProject from '../AddProject/AddProject';
import Profile from '../Profile/Profile';
import TabbedContent from '../TabbedContent/TabbedContent';
import Element from '../../Components/Element';

const MainRoutes = () => {
  return (
    <div style={{minHeight:"75vh"}}>
        <Routes>
            <Route path='/auth' element={<AuthPage/>} />
            <Route path='/profile' element={<RequireAuth><Profile/></RequireAuth>} />
            <Route path='/projects' element={<RequireAuth><Dashboard/></RequireAuth>} />
            <Route path='/' element={<RequireAuth><HomePage/></RequireAuth>}/>
            <Route path='/project/:id' element={<RequireAuth><ProjectDetails/></RequireAuth>} />
            <Route path='/tasks' element={<RequireAuth><TaskPage/></RequireAuth>} />
            <Route path='/addProject' element={<RequireAuth><AddProject/></RequireAuth>} />
            <Route path='/templates' element={<RequireAuth><TabbedContent/></RequireAuth>} />
            <Route path='/*' element={<Error/>} />
            <Route path='/guide' element={<Element/>} />
        </Routes>
    </div>
  )
}

export default MainRoutes