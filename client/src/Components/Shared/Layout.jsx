import React from "react";
import StylesheetWrap from "./StylesheetWrap";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Dashboard from "././../../Views/Dashboard";
import NetworkInteraction from "../NetworkInteraction/NetworkInteraction";
// import { Outlet } from "react-router-dom";
const Layout = ({children}) => {
    return (<>
        <StylesheetWrap>
            <Navbar />
            <NetworkInteraction>
                <Dashboard />
            </NetworkInteraction>
            <Footer />
        </StylesheetWrap>
    </>)
}
export default Layout;