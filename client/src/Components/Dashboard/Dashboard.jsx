// component to wrap content for home, about, and history
import React from "react";
import DashboardLayout from "./DashboardLayout";
import NavigationLayout from "./Navigation/NavigationLayout";
const Dashboard = () => {

    return (<>
        <DashboardLayout>
            <NavigationLayout />
        </DashboardLayout>
    </>)
}

export default Dashboard;