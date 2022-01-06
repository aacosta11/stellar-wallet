import "../../Styles/body.css";
import { Outlet } from  "react-router-dom";
import React from "react";
import Dashboard from "../../Views/Dashboard/Dashboard";
import NavBarComponent from "./NavBarComponent";
const Layout = ({ children }) => {
    return (
        <>
        <NavBarComponent />
        <div id="main-body" className="vw100">
            <Dashboard />
            <Outlet />
        </div>
        </>
    )
}
export default Layout;