import React from "react";
import "./style.css";

function NavBar(props) {
    return (
         <nav className="navbar fixed-top navbar-light bg-light">
            <span className="navbar-text">
                Clicky Game
            </span>
            <span className="navbar-text">
                {props.message}
            </span>
            <span className="navbar-text">
                Score: {props.score}
            </span>
            <span className="navbar-text">
                Top Score: {props.topScore}
            </span>
         </nav>
    )
}

export default NavBar;