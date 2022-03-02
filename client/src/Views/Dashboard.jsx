// component to wrap content for home, about, and history
import React from "react";
import DashboardLayout from "../Components/Dashboard/DashboardLayout";
import NavigationLayout from "../Components/Dashboard/Navigation/NavigationLayout";
const Dashboard = () => {

    return (<>
        <DashboardLayout>
            <NavigationLayout />
        </DashboardLayout>
    </>)
}

export default Dashboard;