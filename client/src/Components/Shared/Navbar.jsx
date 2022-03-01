import React from "react";
import "../../wwwroot/style/Components/Shared/Navbar.scss";
import logo from "../../wwwroot/img/stellar-xlm-logo.png";
const Navbar = () => {
    return (<>
        {/* logo container */}
        <div id="navbar-logo" className="x x-jc-center fixed">
            <div className="" onClick={()=>window.scrollTo({top:0,behavior:'smooth'})} >    
                {/* logo */}
                <img src={logo} alt="stellar-lumens-logo" className="w40px h40px" />
            </div>
        </div>
    </>)
}

export default Navbar;