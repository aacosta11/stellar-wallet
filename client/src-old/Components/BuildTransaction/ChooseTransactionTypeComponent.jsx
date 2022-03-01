import "../../Styles/transaction.css";
import React, { useState } from "react";

const ChooseTransactionTypeComponent = (props) => {
    // state for recording selected transaction type
    const [isTransactionActive,setIsTransactionActive] = useState(true);

    // handle change of selection
    const onChange = e => {
        props.transactionType(e);
        e === "transaction" ? setIsTransactionActive(true) : setIsTransactionActive(false);
    }
    
    return (
        <>
        <h4>choose transaction type</h4>
        <div id="choose-transaction" className="X column-gap-2-px blackground">
            {/* TRANSACTION */}
            <div name="transaction" className={`X X-flex-1 X-jc-center X-ai-center transition-ease whiteground ${isTransactionActive ? "active" : ""}`}
            onClick={(e)=>onChange(e.target.attributes.name.nodeValue)}
            >
                <h5 name="transaction">transaction</h5>
            </div>
            {/* FEE BUMP */}
            <div name="fee-bump" className={`X X-flex-1 X-jc-center X-ai-center transition-ease whiteground ${isTransactionActive ? "" : "active"}`}
            onClick={(e)=>onChange(e.target.attributes.name.nodeValue)}
            >
                <h5 name="fee-bump">fee bump</h5>
            </div>
        </div>
        </>
    )
}
export default ChooseTransactionTypeComponent;