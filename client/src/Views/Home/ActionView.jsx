import React from "react";

const ActionView = ({action}) => {
    const {actionSelected,setActionSelected} = action;
    return (<>
        {actionSelected}
        <p>&nbsp;</p>
        <button onClick={() => {setActionSelected("")}}>Back</button>
    </>)
}

export default ActionView;