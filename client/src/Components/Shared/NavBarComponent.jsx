import React from "react";
import "../../Styles/navbar.css";
const NavbarComponent = props => {
    return (<>
            <div className="X fixed width-100-percent X-jc-center z-index-10">
                <div id="logo-wrap" className="blur-backdrop">
                    <h2>logo</h2>
                </div>
            </div>
            <div id="nav-menu" className="fixed">
                <p className="small-text">hitbox for menu</p>
            </div>
        </>)
}
export default NavbarComponent;