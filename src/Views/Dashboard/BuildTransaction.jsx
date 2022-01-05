import React, { useState } from "react";
import TransactionFormComponent from "../../Components/BuildTransaction/Transaction/TransactionFormComponent";
import ChooseOperationComponent from "../../Components/BuildTransaction/Transaction/ChooseOperationComponent";
import ChooseTransactionTypeComponent from "../../Components/BuildTransaction/ChooseTransactionTypeComponent";
const BuildTransaction = props => {
    const [transactionType,setTransactionType] = useState('transaction');
    return (
        <>
        <h3>BuildTransaction.jsx</h3>
        <ChooseTransactionTypeComponent transactionType={{transactionType,setTransactionType}}/>
        
        <TransactionFormComponent />
        <ChooseOperationComponent />
        </>
    )
}
export default BuildTransaction;