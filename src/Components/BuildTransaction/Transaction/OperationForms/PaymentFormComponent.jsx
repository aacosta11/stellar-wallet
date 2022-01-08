import React, { useState } from "react";
import FilterInputs from "../../../Shared/FilterInputs";
const PaymentFormComponent = ({data}) => {

    const { replaceSpecialCharacters, onlyNumbers, onlyIntegers } = FilterInputs;
    const [destination,setDestination] = useState(data.destination);
    const [asset,setAsset] = useState(data.asset);
    const [amount,setAmount] = useState(data.amount);
    const [sourceAccount,setSourceAccount] = useState(data.sourceAccount);

    const handleAmountInput = e => {
        const inputName = e.target.name;
        let inputValue = onlyNumbers(replaceSpecialCharacters(e.target.value));
        if (inputName === "amount") setAmount(onlyIntegers(inputValue));
        // data[inputName] = onlyIntegers(inputValue);
    }
    const handlePublicKeyInputs = e => {
        const inputName = e.target.name;
        let publicKeyFiltered = replaceSpecialCharacters(e.target.value).toUpperCase();
        // data[inputName] = publicKeyFiltered;
        // data[inputName] = replaceSpecialCharacters(e.target.value).toUpperCase();
        inputName === "destination" ? setDestination(publicKeyFiltered) : setSourceAccount(publicKeyFiltered);
    }
    return (
        <div className="X X-fd-column" >
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
                onChange={handleAmountInput} value={amount}
                />
            </div>
            <div className="X X-fd-column">
                <label htmlFor="sourceAccount">Source Account: </label>
                <input type="text" name="sourceAccount" 
                placeholder="ex: GDPABHSV5BK3SW3ZWXDW6C4FJM3JD4R4YJ4VDZCJTA5YZXTQKWPIW4B4"
                onChange={handlePublicKeyInputs} value={sourceAccount}
                />
            </div>
            {JSON.stringify(data)}
        </div>
    )
}
export default PaymentFormComponent;