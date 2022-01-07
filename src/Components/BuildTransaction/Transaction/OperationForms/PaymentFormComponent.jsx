import React, { useState } from "react";
import FilterInputs from "../../../Shared/FilterInputs";
const PaymentFormComponent = props => {
    const { replaceSpecialCharacters, onlyNumbers, onlyIntegers } = FilterInputs;
    const [destination,setDestination] = useState('');
    const [asset,setAsset] = useState('native');
    const [amount,setAmount] = useState(0);
    const [sourceAccount,setSourceAccount] = useState('');
    const handleNumberInputs = e => {
        const inputName = e.target.name;
        let inputValue = onlyNumbers(replaceSpecialCharacters(e.target.value));
        if (inputName === "amount") setAmount(onlyIntegers(inputValue));
    }
    const handlePublicKeyInputs = e => {
        const inputName = e.target.name;
        let publicKeyFiltered = replaceSpecialCharacters(e.target.value).toUpperCase();
        inputName === "destination" ? setDestination(publicKeyFiltered) : setSourceAccount(publicKeyFiltered);
    }
    return (
        <div className="X X-fd-column">
            <div className="X X-fd-column">
                <label htmlFor="destination">Destination: </label>
                <input type="text" name="destination" 
                placeholder="ex: GDPABHSV5BK3SW3ZWXDW6C4FJM3JD4R4YJ4VDZCJTA5YZXTQKWPIW4B4"
                onChange={handlePublicKeyInputs} value={destination}
                />
            </div>
            <div className="X X-fd-column">
                <label htmlFor="asset">Asset: </label>
                <select name="asset" id="asset" 
                onChange={e=>setAsset(e.target.value)} value={asset}
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
                onChange={handleNumberInputs} value={amount}
                />
            </div>
            <div className="X X-fd-column">
                <label htmlFor="source-account">Source Account: </label>
                <input type="text" name="source-account" 
                placeholder="ex: GDPABHSV5BK3SW3ZWXDW6C4FJM3JD4R4YJ4VDZCJTA5YZXTQKWPIW4B4"
                onChange={handlePublicKeyInputs} value={sourceAccount}
                />
            </div>
        </div>
    )
}
export default PaymentFormComponent;