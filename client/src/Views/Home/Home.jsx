// content to be displayed under the home tab

// either displays a list of available interactions, or the selected interaction

import React, { useState } from "react";
import MainVew from "./MainView.jsx"; // list of interactions
import ActionView from "./ActionView.jsx"; // selected interaction
const Home = () => {
    // state variable for the active interaction (empty if none selected)
    const [actionSelected,setActionSelected] = useState("");

    return (<>
        {/* if no interaction is selected, shows list */}
        {!actionSelected ? 
        <MainVew action={{setActionSelected}} />
        :
        <ActionView action={{actionSelected,setActionSelected}} />
    }

    </>)
}

export default Home;