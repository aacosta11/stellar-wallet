// || TODO : add page navigation with tabs

import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { motion, useAnimation } from "framer-motion";
import "../../../wwwroot/style/Components/Dashboard/Navigation/Tabs.scss";
const Tabs = ({tab}) => {
    const {selectedTab,setSelectedTab} = tab;

    useEffect(()=>{
        if (window.location.pathname.includes('history')) {
            tabControls[`tab${selectedTab}`].start('unselected');
            tabControls[`tab2`].start('selected');
            setSelectedTab(2);
            return
        }
        if (window.location.pathname.includes('about')) {
            tabControls[`tab${selectedTab}`].start('unselected');
            tabControls[`tab3`].start('selected');
            setSelectedTab(3);
            return
        }
    },[])

    const handleTabSwitch = e => {
        if (selectedTab !== e.target.id) {
            tabControls[`tab${selectedTab}`].start('unselected');
            tabControls[`tab${e.target.id}`].start('selected');
            setSelectedTab(e.target.id);
        };
    };

    const tabVariants = {
        selected: {textDecoration:'underline',scale:1.2},
        unselected: {textDecoration:'underline transparent',scale:1},
    }

    const tabControls = {
        tab1: useAnimation(),
        tab2: useAnimation(),
        tab3: useAnimation(),
    }

    return (<>
        <div id="action-selection" className="h55px x x-fd-column x-jc-center" >
            <div className="x x-jc-space-around x-ai-center w50percent" >
                <Link to="/" >
                    <motion.h5 id="1" onClick={handleTabSwitch}
                        variants={tabVariants}
                        initial="selected"
                        animate={tabControls.tab1}
                        >
                            Home
                    </motion.h5>
                </Link>
                <Link to="/history" >
                    <motion.h5 id="2" onClick={handleTabSwitch}
                        initial="unselected"
                        variants={tabVariants}
                        animate={tabControls.tab2}
                        >
                            History
                    </motion.h5>
                </Link>
                <Link to="/about" >
                    <motion.h5 id="3" onClick={handleTabSwitch}
                        initial="unselected"
                        variants={tabVariants}
                        animate={tabControls.tab3}
                        >
                            About
                    </motion.h5>
                </Link>
            </div>
        </div>
    </>)
}

export default Tabs;