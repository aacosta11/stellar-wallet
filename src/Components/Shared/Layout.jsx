import "../../Styles/body.css";
import { Outlet } from  "react-router-dom";
import React from "react";
import NavBarComponent from "./NavBarComponent";
const Layout = ({ children }) => {
    return (
        <>
        <NavBarComponent />
        <div id="main-body">
            <Outlet />
        </div>
        </>
    )
}
export default Layout; 