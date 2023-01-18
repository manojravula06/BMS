import React from "react";
import { useNavigate } from "react-router-dom";
import unauth from "../../assets/403.jpg";
import "./Unauthorized.css";

const Unauthorized = () => {
const navigate= useNavigate();
const goBack=()=>{
  navigate('/')
}
  return (
    <div className="unauth">
      <img src={unauth} alt="Un authorized_image_missig" className="img"/>
      <h2>Unauthorized access !</h2>
      <button className="btn btn-danger"
      onClick={goBack}
      >Back to Home</button>
    </div>
  );
};

export default Unauthorized;
