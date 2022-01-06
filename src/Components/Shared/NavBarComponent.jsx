import React from "react";
import "../../Styles/navbar.css";
const NavbarComponent = props => {
    return (
        <>
        <div className="fixed vw100 ta-center">
            <h2>logo</h2>
        </div>
        <div id="nav-menu" className="fixed">
            <p className="small-text">hitbox for menu</p>
        </div>
        </>
    )
}
export default NavbarComponent;