import React, { useState } from "react";
import FilterInputs from "../../Shared/FilterInputs";
const TransactionFormComponent = props => {
    const { replaceSpecialCharacters, onlyNumbers, onlyIntegers } = FilterInputs;
    const [sourceAccount,setSourceAccount] = useState('');
    const [transactionSequenceNumber,setTransactionSequenceNumber] = useState('');
    const [baseFee,setBaseFee] = useState(100);
    const [memo,setMemo] = useState('');
    const [timeBounds,setTimeBounds] = useState(0);

    // handle all number inputs
    const handleNumberInputChange = e => {
        // store element data
        let inputName = e.target.name;
        let inputVariable = onlyNumbers(replaceSpecialCharacters(e.target.value));
        // set appropriate state variables to input value
        if (inputName === "transaction-sequence-number") setTransactionSequenceNumber(inputVariable);
        else if (inputName === "base-fee") setBaseFee(onlyIntegers(inputVariable));
        else if (inputName === "time-bounds") setTimeBounds(onlyIntegers(inputVariable));
    };

    // handle source account input
    const handleSourceAccountChange = e => setSourceAccount(replaceSpecialCharacters(e.target.value).toUpperCase());

    return (
        <div>
            <h4>TransactionFormComponent.jsx</h4>

            {/* Source Account */}
            <div className="X X-fd-column">
                <label htmlFor="source-account">Source Account: </label>
                <input type="text" name="source-account"
                onChange={handleSourceAccountChange} value={sourceAccount}
                placeholder="ex: GDPABHSV5BK3SW3ZWXDW6C4FJM3JD4R4YJ4VDZCJTA5YZXTQKWPIW4B4"
                />
            </div>

            {/* Transaction Sequence Number */}
            <div className="X X-fd-column">
                <label htmlFor="transaction-sequence-number">Transaction Sequence Number: </label>
                <input type="text" name="transaction-sequence-number"
                onChange={handleNumberInputChange} value={transactionSequenceNumber}/>
            </div>

            {/* Base Fee */}
            <div className="X X-fd-column">
                <label htmlFor="base-fee">Base Fee: </label>
                <input type="text" name="base-fee"
                onChange={handleNumberInputChange} value={baseFee}/>
            </div>

            {/* Memo */}
            <div className="X X-fd-column">
                <label htmlFor="memo">Memo: </label>
                <input type="text" name="memo" 
                onChange={e=>setMemo(e.target.value)} value={memo}/>
            </div>

            {/* Time Bounds */}
            <div className="X X-fd-column">
                <label htmlFor="time-bounds">Time Bounds: </label>
                <input type="text" name="time-bounds"
                onChange={handleNumberInputChange} value={timeBounds}/>
            </div>

        </div>
    )
}
export default TransactionFormComponent;