import React, { useState } from "react";
import MainVew from "./MainView.jsx";
import ActionView from "./ActionView.jsx";
const Home = () => {
    const [actionSelected,setActionSelected] = useState("");

    const openMainView = () => {
        setActionSelected("");
    }
    return (<>
        {!actionSelected ? 
        <MainVew action={{setActionSelected}} />
        :
        <ActionView action={{actionSelected,setActionSelected}} />
    }

    </>)
}

export default Home;