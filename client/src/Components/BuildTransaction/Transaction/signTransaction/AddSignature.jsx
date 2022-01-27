import React, { useState } from "react";
import FilterInputs from "../../../Shared/FilterInputs";
const AddSignature = props => {
    const [sigs,setSigs] = useState([]);
    const {replaceSpecialCharacters} = FilterInputs;
    const handleSecretKey = e => {
        let sigsCopy = [...sigs];
        sigsCopy.push(replaceSpecialCharacters(e.value))
    }
    return (<>
        <h4>Signatures</h4>
        <input type="text" onChange={(e)=>handleSecretKey(e)} />
    </>)
}
export default AddSignature;