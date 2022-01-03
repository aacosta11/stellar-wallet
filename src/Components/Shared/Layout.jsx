import { Outlet } from  "react-router-dom";
import React from "react";
import NavBarComponent from "./NavBarComponent";
import BlurBodyComponent from "./BlurBodyComponent";
const Layout = ({ children }) => {
    return (
        <>
        <NavBarComponent />
        <BlurBodyComponent>
            {children}
        </BlurBodyComponent>
        <Outlet />
        </>
    )
}
export default Layout; 