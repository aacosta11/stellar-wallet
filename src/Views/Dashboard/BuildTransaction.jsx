import React, { useState } from "react";
import TransactionFormComponent from "../../Components/BuildTransaction/Transaction/TransactionFormComponent";
import ChooseTransactionTypeComponent from "../../Components/BuildTransaction/ChooseTransactionTypeComponent";
import OperationFormComponent from "../../Components/BuildTransaction/Transaction/OperationFormComponent";
import FeeBumpFormComponent from "../../Components/BuildTransaction/FeeBump/FeeBumpFormComponent";
import TransactionContext from "../../Context/TransactionContext";
const BuildTransaction = props => {
    const [transactionType,setTransactionType] = useState('transaction');
    const [operations,setOperations] = useState([{operation:'', operationData: {}, id:1}]);
    return (
        <div>
        <h3>BuildTransaction.jsx</h3>
        <ChooseTransactionTypeComponent transactionType={e=>setTransactionType(e)}/>
        {
            transactionType === "transaction" ? 
            <>
            <TransactionContext.Provider value={{operations,setOperations}}>
                <div className="X X-fd-column row-gap-2-rem">
                    <TransactionFormComponent />
                    <OperationFormComponent />
                </div>
            </TransactionContext.Provider>
            </>
            :
            <>
            <FeeBumpFormComponent />
            </>
        }
        </div>
    )
}
export default BuildTransaction;