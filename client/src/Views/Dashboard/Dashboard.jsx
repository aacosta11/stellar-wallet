import React from "react";
import { Link } from "react-router-dom";
import "../../Styles/dashboard.css";
import profilePic from "../../img/anon-profile.png";
const Dashboard = props => {
    return (
        <>
        <div id="dashboard">
            <Link to="/history" >History</Link>
            <Link to="/" >Home</Link>
            <div className="content X column-gap-1-rem">
                <div id="profile-pic-wrap" className="X X-jc-center X-ai-center" >
                    <img src={profilePic} alt="profile-pic" id="profile-pic" />
                </div>
                <div id="user-settings" className="X-as-center" >
                    <div className="X column-gap-2-px">
                        {/* placeholder icon */}
                        <div className="userButtonsIcon"></div>
                        <h5>public key</h5>
                    </div>
                    <div className="X column-gap-2-px">
                        {/* placeholder icon */}
                        <div className="userButtonsIcon"></div>
                        <h5>private key options</h5>
                    </div>
                    <div className="X column-gap-2-px">
                        {/* placeholder icon */}
                        <div className="userButtonsIcon"></div>
                        <h5>option</h5>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}
export default Dashboard;