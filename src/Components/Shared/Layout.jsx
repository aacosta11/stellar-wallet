import "../../Styles/body.css";
import { Outlet } from  "react-router-dom";
import React from "react";
import Dashboard from "../../Views/Dashboard/Dashboard";
import NavBarComponent from "./NavBarComponent";
import FooterComponent from "./FooterComponent";
const Layout = ({ children }) => {
    return (
        <>
        <NavBarComponent />
        <div id="main-body" className="width-100-percent">
            <Dashboard />
            <Outlet />
        </div>
        <FooterComponent />
        </>
    )
}
export default Layout;