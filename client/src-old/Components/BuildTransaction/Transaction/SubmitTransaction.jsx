import React, { useContext } from "react";
import BoxOverlayContext from "../../../Context/BoxOverlayContext";
import "../../../Styles/submitTransaction.css";
const SubmitTransaction = props => {
    const {boxOverlayActive,setBoxOverlayActive} = useContext(BoxOverlayContext);
    return (
        <>
        <div id="submit-transaction" className="X X-jc-center X-ai-center transition-ease"
        onClick={()=>setBoxOverlayActive(true)}
        >
            <h5>submit</h5>
        </div>
        </>
    )
}
export default SubmitTransaction;