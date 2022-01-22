import React, { useContext } from "react";
import BoxOverlayContext from "../../Context/BoxOverlayContext";
import "../../Styles/boxOverlay.css";
const BoxOverlay = props => {
    const {boxOverlayActive,setBoxOverlayActive} = useContext(BoxOverlayContext);
    return (<>
        <div className="absolute width-100-percent height-100-percent z-index-9 blur-backdrop" 
        onClick={()=>{setBoxOverlayActive(!boxOverlayActive)}}
        ></div>
        <div id="sign-transaction-container" className="X X-jc-center absolute width-100-percent"
        onClick={()=>{console.log('front')}}>
            <div id="sign-transaction-box" className="z-index-9">
                {props.children}
            </div>
        </div>
    </>)
}
export default BoxOverlay;