import React from "react";
import StylesheetWrap from "./StylesheetWrap"; // adds css styling
import Navbar from "./Navbar";
import Footer from "./Footer";
import Dashboard from "././../../Views/Dashboard"; 
import NetworkInteraction from "../NetworkInteraction/NetworkInteraction"; // container for context state variable (none yet)

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