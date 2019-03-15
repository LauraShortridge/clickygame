import React from "react";
import "./style.css";

function NavBar(props) {
    return (
         <nav className="navbar fixed-top navbar-light bg-light">
            <span className="navbar-text">
                Clicky Game
            </span>
            <span className="navbar-text">
                Click on a picture to begin!
            </span>
            <span className="navbar-text">
                Score:
            </span>
            <span className="navbar-text">
                Top Score:
            </span>
         </nav>
    )
}

export default NavBar;