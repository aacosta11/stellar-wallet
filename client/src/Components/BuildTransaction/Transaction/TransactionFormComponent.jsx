import React, { useContext } from "react";
import FilterInputs from "../../Shared/FilterInputs";
import TransactionContext from "../../../Context/TransactionContext";
const TransactionFormComponent = props => {
    const { replaceSpecialCharacters, onlyNumbers, onlyIntegers } = FilterInputs;
    const { transactionBaseInfo,setTransactionBaseInfo } = useContext(TransactionContext);

    // handle all number inputs
    const handleNumberInputChange = e => {
        // store element data
        let inputName = e.target.name;
        let inputVariable = onlyNumbers(replaceSpecialCharacters(e.target.value));
        // set appropriate state variables to input value
        inputName === "transactionSequenceNumber" ? setTransactionBaseInfo({...transactionBaseInfo,[inputName]:inputVariable})
        : setTransactionBaseInfo({...transactionBaseInfo,[inputName]:onlyIntegers(inputVariable)})
    };

    // handle source account input
    const handleSourceAccountChange = e => setTransactionBaseInfo({
        ...transactionBaseInfo,
        sourceAccount:replaceSpecialCharacters(e.target.value).toUpperCase()
        });

    return (
        <div>
            <h4>TransactionFormComponent.jsx</h4>

            {/* Source Account */}
            <div className="X X-fd-column">
                <label htmlFor="sourceAccount">Source Account: </label>
                <input type="text" name="source-account"
                onChange={handleSourceAccountChange} value={transactionBaseInfo.sourceAccount}
                placeholder="ex: GDPABHSV5BK3SW3ZWXDW6C4FJM3JD4R4YJ4VDZCJTA5YZXTQKWPIW4B4"
                />
            </div>

            {/* Transaction Sequence Number */}
            <div className="X X-fd-column">
                <label htmlFor="transactionSequenceNumber">Transaction Sequence Number: </label>
                <input type="text" name="transactionSequenceNumber"
                onChange={handleNumberInputChange} value={transactionBaseInfo.transactionSequenceNumber}/>
            </div>

            {/* Base Fee */}
            <div className="X X-fd-column">
                <label htmlFor="baseFee">Base Fee: </label>
                <input type="text" name="baseFee"
                onChange={handleNumberInputChange} value={transactionBaseInfo.baseFee}/>
            </div>

            {/* Memo */}
            <div className="X X-fd-column">
                <label htmlFor="memo">Memo: </label>
                <input type="text" name="memo" 
                onChange={e=>setTransactionBaseInfo({...transactionBaseInfo,memo:e.target.value})} value={transactionBaseInfo.memo}/>
            </div>

            {/* Time Bounds */}
            <div className="X X-fd-column">
                <label htmlFor="timeBounds">Time Bounds: </label>
                <input type="text" name="timeBounds"
                onChange={handleNumberInputChange} value={transactionBaseInfo.timeBounds}/>
            </div>

        </div>
    )
}
export default TransactionFormComponent;