// display for a selected interaction
import React from "react";

const ActionView = ({action}) => {
    // state variable for the selected interaction (empty if none selected)
    const {actionSelected,setActionSelected} = action;
    return (<>
        {actionSelected}
        <p>&nbsp;</p>
        {/* back button empties the state variable for a selected interaction */}
        <button onClick={() => {setActionSelected("")}}>Back</button> 
    </>)
}

export default ActionView;