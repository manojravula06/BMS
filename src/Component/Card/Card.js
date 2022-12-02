import React from "react";
import Card from "react-bootstrap/Card";
import { HandThumbsUpFill } from "react-bootstrap-icons";
import "./Card.css";

const CardItem = ({ img, title, text }) => {
  return (
    <div>
      <Card className="moviecard">
        <Card.Body style={{ width: "18rem" }} >
          <Card.Img variant="top" src={img} className="img" />
          <HandThumbsUpFill className="text-success" />
          <span className="text-success fw-bold m-2">{text}</span>
          <Card.Title className="text-light m-2">{title}</Card.Title>
        </Card.Body>
      </Card>
    </div>
  );
};

export default CardItem;
