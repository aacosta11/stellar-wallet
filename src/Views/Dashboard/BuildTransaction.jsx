import React, { useState } from "react";
import TransactionFormComponent from "../../Components/BuildTransaction/Transaction/TransactionFormComponent";
import ChooseOperationComponent from "../../Components/BuildTransaction/Transaction/ChooseOperationComponent";
import ChooseTransactionTypeComponent from "../../Components/BuildTransaction/ChooseTransactionTypeComponent";
import FeeBumpFormComponent from "../../Components/BuildTransaction/FeeBump/FeeBumpFormComponent";
const BuildTransaction = props => {
    const [transactionType,setTransactionType] = useState('transaction');

    return (
        <>
        <h3>BuildTransaction.jsx</h3>
        <ChooseTransactionTypeComponent transactionType={e=>setTransactionType(e)}/>
        {
            transactionType == "transaction" ? 
            <>
            <div className="X X-fd-column">
                <TransactionFormComponent />
                <ChooseOperationComponent />
            </div>
            </>
            : 
            <>
            <FeeBumpFormComponent />
            </>
        }
        </>
    )
}
export default BuildTransaction;