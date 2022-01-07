import React, { useState } from "react";
import FilterInputs from "../../../Shared/FilterInputs";
const PaymentFormComponent = props => {
    const { replaceSpecialCharacters, onlyNumbers, onlyIntegers } = FilterInputs;
    const handleNumberInputs = e => {
        
    }
    return (
        <div className="X X-fd-column">
            <div className="X X-fd-column">
                <label htmlFor="destination">Destination: </label>
                <input type="text" name="destination" 

                placeholder="ex: GDPABHSV5BK3SW3ZWXDW6C4FJM3JD4R4YJ4VDZCJTA5YZXTQKWPIW4B4"
                />
            </div>
            <div className="X X-fd-column">
                <label htmlFor="asset">Asset: </label>
                <input type="text" name="asset" />
            </div>
            <div className="X X-fd-column">
                <label htmlFor="amount">Amount: </label>
                <input type="text" name="amount" />
            </div>
            <div className="X X-fd-column">
                <label htmlFor="source-account">Source Account: </label>
                <input type="text" name="source-account" />
            </div>
        </div>
    )
}
export default PaymentFormComponent;