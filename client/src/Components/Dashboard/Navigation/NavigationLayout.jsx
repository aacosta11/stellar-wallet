// navigation between home, history, about, and their content
import React, { useState } from "react";
import Tabs from "./Tabs"; 
import { Outlet } from "react-router-dom";
import "../../../wwwroot/style/Components/Dashboard/Navigation/NavigationLayout.scss";
const NavigationLayout = (props) => {
    // state variable for the active tab
    const [selectedTab,setSelectedTab] = useState(1);

    return (<>
        {/*  */}
        <Tabs tab={{selectedTab,setSelectedTab}} />
        <div id="content-container">
            <div className="w80percent x x-jc-center">
                {/* content from associated tab selection */}
                <Outlet />
            </div>
        </div>
    </>)
}

export default NavigationLayout;