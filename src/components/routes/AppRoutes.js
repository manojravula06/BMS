import React from "react";
import {  BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "../../Pages/Login/Login";
import LandingPage from "../../Pages/LandingPage/LandingPage";
import Unauthorized from "../../Pages/Unauthorized/Unauthorized";
import Admin from "../../Pages/admin/Admin";

const AppRoute=()=>{
    return(
        <Router>
           <Routes>
           <Route exact path="/login" element={<Login/>}/>
            <Route exact path="/" element={<LandingPage/>}/>
           <Route exact path="/admin" element={<Admin/>}/>
           <Route path="/*" element={<Unauthorized/>} />          
           </Routes>
        </Router>
    )
}

export default AppRoute;