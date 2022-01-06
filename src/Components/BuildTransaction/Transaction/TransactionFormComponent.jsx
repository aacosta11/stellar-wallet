import React, { useState } from "react";

const TransactionFormComponent = props => {
    const [sourceAccount,setSourceAccount] = useState('');
    const [onlyNumsTemp,setOnlyNumsTemp] = useState('');
    const [transactionSequenceNumber,setTransactionSequenceNumber] = useState('');
    const [baseFee,setBaseFee] = useState(100);
    const [memo,setMemo] = useState('');
    const [timeBounds,setTimeBounds] = useState('');
    const handleTransactionSequenceNumberChange = e => {
        let numStr = parseInt(e.target.value);
        if (!numStr >= 0) {
            setOnlyNumsTemp('');
            setTransactionSequenceNumber('');
        }
        if(numStr.toString().match(/\d/g)) {
            setOnlyNumsTemp(numStr);
            setTransactionSequenceNumber(numStr);
        } else {
            setTransactionSequenceNumber(onlyNumsTemp);
        }
    }
    const baseFeeChange = e => {
        
    }
    return (
        <>
        <h4>transaction form</h4>
        <div className="X X-fd-column">
            <label htmlFor="source-account">Source Account: </label>
            <input type="text" name="source-account" value={sourceAccount}/>
        </div>
        <div className="X X-fd-column">
            <label htmlFor="transaction-sequence-number">Transaction Sequence Number: </label>
            <input type="text" name="transaction-sequence-number"
            onChange={handleTransactionSequenceNumberChange} value={transactionSequenceNumber}/>
        </div>
        <div className="X X-fd-column">
            <label htmlFor="base-fee">Base Fee: </label>
            <input type="text" name="base-fee" value={baseFee}/>
        </div>
        <div className="X X-fd-column">
            <label htmlFor="memo">Memo: </label>
            <input type="text" name="memo" value={memo}/>
        </div>
        <div className="X X-fd-column">
            <label htmlFor="time-bounds">Time Bounds: </label>
            <input type="text" name="time-bounds" value={timeBounds}/>
        </div>
        </>
    )
}
export default TransactionFormComponent;