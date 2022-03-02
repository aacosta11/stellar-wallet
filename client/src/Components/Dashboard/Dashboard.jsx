// component to wrap content for home, about, and history
import React from "react";
import DashboardLayout from "./DashboardLayout";
import StuffUnderUserCardLayout from "./StuffUnderUserCardLayout";
const Dashboard = () => {

    return (<>
        <DashboardLayout>
            <StuffUnderUserCardLayout />
        </DashboardLayout>
    </>)
}

export default Dashboard;