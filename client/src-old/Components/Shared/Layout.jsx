import "../../Styles/layout.css";
import { Outlet } from  "react-router-dom";
import React, { useState, useContext } from "react";
import Dashboard from "../../Views/Dashboard/Dashboard";
import NavBarComponent from "./NavBarComponent";
import FooterComponent from "./FooterComponent";
import BoxOverlay from "./BoxOverlay";
import SignTransactionForm from "../BuildTransaction/Transaction/signTransaction/SignTransactionForm";
import BoxOverlayContext from "../../Context/BoxOverlayContext";
const Layout = ({ children }) => {
    const [boxOverlayActive,setBoxOverlayActive] = useState(false);
    return (<>
        <NavBarComponent />
            <BoxOverlayContext.Provider value={{boxOverlayActive,setBoxOverlayActive}}>
                <div id="main-body" className="width-100-percent">
                    {boxOverlayActive ? <BoxOverlay children={<SignTransactionForm />}/> : ''}
                    <Dashboard />
                    <div id="section-content">
                        <Outlet />
                    </div>
                </div>
            </BoxOverlayContext.Provider>
        <FooterComponent />
        </>)
}
export default Layout;