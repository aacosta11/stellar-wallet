import "../../Styles/transaction.css";
import React, { useState } from "react";

const ChooseTransactionTypeComponent = (props) => {
    const [isTransactionActive,setIsTransactionActive] = useState(true);
    const [isFeeBumpActive,setIsFeeBumpActive] = useState(false);
    const onChange = e => {
        props.transactionType(e);
        if (e === "transaction") {
            setIsTransactionActive(true);
            setIsFeeBumpActive(false);
        } else {
            setIsTransactionActive(false);
            setIsFeeBumpActive(true);
        }
    }
    return (
        <>
        <h4>choose transaction type</h4>
        <div id="choose-transaction" className="X column-gap-2-px blackground">
            <div name="transaction" className={`X X-flex-1 X-jc-center X-ai-center transition-ease whiteground ${isTransactionActive ? "active" : ""}`}
            onClick={(e)=>onChange(e.target.attributes.name.nodeValue)}
            >
                <h5 name="transaction">transaction</h5>
            </div>
            <div name="fee-bump" className={`X X-flex-1 X-jc-center X-ai-center transition-ease whiteground ${isFeeBumpActive ? "active" : ""}`}
            onClick={(e)=>onChange(e.target.attributes.name.nodeValue)}
            >
                <h5 name="fee-bump">fee bump</h5>
            </div>
        </div>
        </>
    )
}
export default ChooseTransactionTypeComponent;