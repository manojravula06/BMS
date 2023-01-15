import React, { useState, useEffect } from "react";
import { useParams,Link } from "react-router-dom";
import { CSpinner } from "@coreui/react";
import {getMovie} from '../../API/movies/Movies';
import Nav  from "../../components/navbar/Nav";
const Movie = () => {
    const [movie,setMovie]=useState(null);
    const {movieId:selectedMovie}=useParams();
    
const initialize=async()=>{
    const response=await getMovie(selectedMovie)
    console.log(response);
}
useEffect(()=>{
    initialize();
},[])
  return (
    <div>
      <Nav />
        {!movie && <CSpinner className="align-items-center"/>}
    </div>
  );
};

export default Movie;
