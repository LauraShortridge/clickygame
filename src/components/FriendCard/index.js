import React from "react";
import "./style.css";

function FriendCard(props) {
  return (
    <div className="card" onClick={() => props.makeScore(props.id)}>
      <img className="img-fluid remove" alt={props.name} attr={props.id} src={props.image} onClick={() => props.shuffle()} />
    </div>
  );
}

export default FriendCard;
