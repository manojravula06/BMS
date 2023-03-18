import React from "react";
import {  BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "../../Pages/Login/Login";
import LandingPage from "../../Pages/LandingPage/LandingPage";
import Unauthorized from "../../Pages/Unauthorized/Unauthorized";
import Admin from "../../Pages/admin/Admin";
import {Client} from "../../Pages/client/Client";
import Movie from "../../Pages/movie/Movie";
import { MovieTheaters } from "../../Pages/movietheater/MovieTheater";
import BookingsPage from "../../Pages/bookings/Bookings";

const AppRoute=()=>{
    return(
        <Router>
           <Routes>
           <Route exact path="/login" element={<Login/>}/>
            <Route exact path="/" element={<LandingPage/>}/>
           <Route exact path="/admin" element={<Admin/>}/>
           <Route exact path="/client" element={<Client/>}/>
           <Route exact path="/*" element={<Unauthorized/>} />          
           <Route exact path="/movie/:movieId/details" element={<Movie/>} />
           <Route exact path="/buytickets/:movieName/:movieId" element={<MovieTheaters/>}/>
           <Route exact path="/movie/:movieId/:theaterId" element={<BookingsPage/>}/>
           </Routes>
        </Router>
    )
}

export default AppRoute;