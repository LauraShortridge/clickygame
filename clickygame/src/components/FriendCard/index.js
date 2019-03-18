import React from "react";
import "./style.css";
// import NavBar from "../NavBar";

function FriendCard(props) {
  return (
    <div className="card">
      <img className="img-fluid remove" alt={props.name} src={props.image} onClick={() => props.shuffle()} />
      <span onClick={() => props.makeScore()}>
        𝘅
      </span>
    </div>
  );
}

export default FriendCard;
