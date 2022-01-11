import React from "react";
import { Link } from "react-router-dom";
import "../../Styles/dashboard.css";
const Dashboard = props => {
    return (
        <>
        <div id="dashboard">
            <h2>account deets</h2>
            <Link to="/history" >History</Link>
            <Link to="/" >Home</Link>
        </div>
        </>
    )
}
export default Dashboard;