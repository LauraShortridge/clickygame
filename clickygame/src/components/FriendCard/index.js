import React from "react";
import "./style.css";

function FriendCard(props) {
  return (
    <div className="card">
      <img className="img-fluid remove" alt={props.name} src={props.image} onClick={() => props.removeFriend(props.id)}/>
    </div>
  );
}

export default FriendCard;
