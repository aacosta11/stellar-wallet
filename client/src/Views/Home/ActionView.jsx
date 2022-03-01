import React from "react";

const ActionView = ({action}) => {
    const {actionSelected,setActionSelected} = action;
    return (<>
        {actionSelected}
        <button onClick={() => {setActionSelected("")}}>Back</button>
    </>)
}

export default ActionView;