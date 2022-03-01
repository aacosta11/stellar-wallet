import React, { useState } from "react";
import InteractionContext from "../../Context/InteractionContext";
const NetworkInteraction = ({children}) => {
    const [interaction, setInteraction] = useState({interactionName: '', data: {}});
    return (<>
        <InteractionContext.Provider value={{interaction, setInteraction}}>
            {children}
        </InteractionContext.Provider>
    </>)
}

export default NetworkInteraction;