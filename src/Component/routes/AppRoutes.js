import {  BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "../../Pages/Login/Login";
import LandingPage from "../../Pages/LandingPage/LandingPage";

const AppRoute=()=>{
    return(
        <Router>
           <Routes>
           <Route exact path="/login" element={<Login/>}/>
            <Route exact path="/" element={<LandingPage/>}/>
           </Routes>
        </Router>
    )
}

export default AppRoute;