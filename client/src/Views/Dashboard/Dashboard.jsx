import React, { useState, useEffect } from "react";
import axios from "axios";
import "../../Styles/dashboard.css";
import profilePic from "../../img/anon-profile.png";
import DemoKeysContext from "../../Context/DemoKeysContext";
const Dashboard = props => {
    // const [keys,setKeys] = useState('');
    // useEffect(()=>{
    //     fetchKeys()
    // },[])
    // async function fetchKeys() {
    //     await axios.get('https://localhost:7114/Accounts/demo-keys')
    //         .then(res=>console.log(res))
    //         .catch(err=>console.log(err))
    // }
    return (
        <>
        <div id="dashboard" className="X X-ai-center">
            <div className="content X column-gap-1-rem blur-backdrop">
                <div id="profile-pic-wrap" className="X X-jc-center X-ai-center" >
                    <img src={profilePic} alt="profile-pic" id="profile-pic" />
                </div>
                <div id="user-settings" className="X-as-center" >
                    <div className="X column-gap-2-px">
                        {/* placeholder icon */}
                        <div className="userButtonsIcon"></div>
                        <h5>public key </h5>
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