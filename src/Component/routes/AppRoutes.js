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
           <Route path="/*" element={<Unauthorized/>} />
           <Route exact path="/admin" element={<Admin/>}/>
           </Routes>
        </Router>
    )
}

export default AppRoute;