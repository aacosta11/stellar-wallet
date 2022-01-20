import React, { useState, useContext, useEffect } from "react";
import TransactionContext from "../../../../../Context/TransactionContext";
import FilterInputs from "../../../../Shared/FilterInputs";
import DefaultOperationProps from "../defaults/DefaultOperationProps";
const PaymentFormComponent = ({id}) => {
    const { replaceSpecialCharacters, onlyNumbers, onlyIntegers } = FilterInputs; // functions to filter user input
    const { operations } = useContext(TransactionContext); // global state with all user operations
    // local state with specific operationData
    const [ operationData, setOperationData ] = useState({...DefaultOperationProps.payment,...operations.find(op=>op.id === id).operationData});

    // updates state to be on par with global state
    useEffect(()=>{
        setOperationData(operations.find(op=>op.id === id).operationData);
    },[operations])

    // handles amount input
    const handleAmountInput = e => {
        const inputName = e.target.name;
        let inputValue = onlyIntegers(onlyNumbers(replaceSpecialCharacters(e.target.value)));
        setOperationData({...operationData,[inputName]:inputValue});
    }

    // handles public key input
    const handlePublicKeyInputs = e => {
        const inputName = e.target.name;
        let publicKeyFiltered = replaceSpecialCharacters(e.target.value).toUpperCase();
        setOperationData({...operationData,[inputName]:publicKeyFiltered});
    }

    return (
        <div className="X X-fd-column" >

            {/* DESTINATION */}
            <div className="X X-fd-column">
                <label htmlFor="destination">Destination: </label>
                <input type="text" name="destination" 
                placeholder="ex: GDPABHSV5BK3SW3ZWXDW6C4FJM3JD4R4YJ4VDZCJTA5YZXTQKWPIW4B4"
                onChange={handlePublicKeyInputs} value={operationData.destination}
                />
            </div>
            {/* ASSET */}
            {/* only supports native for now */}
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
            {/* AMOUNT */}
            <div className="X X-fd-column">
                <label htmlFor="amount">Amount: </label>
                <input type="text" name="amount" 
                onChange={handleAmountInput} value={operationData.amount}
                />
            </div>
            {/* SOURCE ACCOUNT */}
            {/**** optional ****/}
            <div className="X X-fd-column">
                <label htmlFor="sourceAccount">Source Account: </label>
                <input type="text" name="sourceAccount" 
                placeholder="ex: GDPABHSV5BK3SW3ZWXDW6C4FJM3JD4R4YJ4VDZCJTA5YZXTQKWPIW4B4"
                onChange={handlePublicKeyInputs} value={operationData.sourceAccount}
                />
            </div>
        </div>
    )
}
export default PaymentFormComponent;