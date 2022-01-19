import React, { useState, useContext, useEffect } from "react";
import TransactionContext from "../../../../../Context/TransactionContext";
import FilterInputs from "../../../../Shared/FilterInputs";
import DefaultOperationProps from "../defaults/DefaultOperationProps";
const PaymentFormComponent = ({id}) => {
    const { replaceSpecialCharacters, onlyNumbers, onlyIntegers } = FilterInputs;
    const { operations, setOperations } = useContext(TransactionContext);
    const [ operationData, setOperationData ] = useState({...DefaultOperationProps.payment,...operations.find(op=>op.id === id).operationData});

    useEffect(()=>{
        setOperationData(operations.find(op=>op.id === id).operationData);
    },[operations])

    const handleAmountInput = e => {
        const inputName = e.target.name;
        let inputValue = onlyIntegers(onlyNumbers(replaceSpecialCharacters(e.target.value)));
        setOperationData({...operationData,[inputName]:inputValue})
    }
    const handlePublicKeyInputs = e => {
        const inputName = e.target.name;
        let publicKeyFiltered = replaceSpecialCharacters(e.target.value).toUpperCase();
        setOperationData({...operationData,[inputName]:publicKeyFiltered});
    }
    return (
        <div className="X X-fd-column" >
            <div className="X X-fd-column">
                <label htmlFor="destination">Destination: </label>
                <input type="text" name="destination" 
                placeholder="ex: GDPABHSV5BK3SW3ZWXDW6C4FJM3JD4R4YJ4VDZCJTA5YZXTQKWPIW4B4"
                onChange={handlePublicKeyInputs} value={operationData.destination}
                />
            </div>
            <div className="X X-fd-column">
                <label htmlFor="asset">Asset: </label>
                <select name="asset" id="asset" 
                onChange={e=>operationData({...operationData,asset:[e.target.value]})} value={operationData.asset}
                disabled
                >
                    <option value="native">Native</option>
                    <option value="alphanumeric-4">Alphanumeric 4</option>
                    <option value="alphanumeric-12">Alphanumeric 12</option>
                </select>
            </div>
            <div className="X X-fd-column">
                <label htmlFor="amount">Amount: </label>
                <input type="text" name="amount" 
                onChange={handleAmountInput} value={operationData.amount}
                />
            </div>
            <div className="X X-fd-column">
                <label htmlFor="sourceAccount">Source Account: </label>
                <input type="text" name="sourceAccount" 
                placeholder="ex: GDPABHSV5BK3SW3ZWXDW6C4FJM3JD4R4YJ4VDZCJTA5YZXTQKWPIW4B4"
                onChange={handlePublicKeyInputs} value={operationData.sourceAccount}
                />
            </div>
            {JSON.stringify(operationData)}
        </div>
    )
}
export default PaymentFormComponent;