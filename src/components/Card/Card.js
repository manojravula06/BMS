import React from "react";
import Card from "react-bootstrap/Card";
import { HandThumbsUpFill } from "react-bootstrap-icons";
import "./Card.css";

const CardItem = ({ img, title, text }) => {
  return (
    <div style={{ width: "20rem", height: "30rem" }} 
    className="card bg-dark p-2 m-2">
      <img src={img} alt="" style={{height:'25rem'}}/>
      <HandThumbsUpFill className="m-2 text-success"/>
      <h4 className="text-light m-2">{title}</h4>
    </div>
  );
};

export default CardItem;
