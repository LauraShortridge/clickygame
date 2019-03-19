import React from "react";
import "./style.css";
// import NavBar from "../NavBar";

function FriendCard(props) {
  return (
    <div className="card">
      <img className="img-fluid remove" alt={props.name} attr={props.id} src={props.image} onClick={() => props.shuffle()} />
      <span onClick={() => props.makeScore(props.id)}>
        𝘅
      </span>
    </div>
  );
}

export default FriendCard;
