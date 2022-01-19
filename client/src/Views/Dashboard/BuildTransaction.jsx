import React, { useState } from "react";
import TransactionFormComponent from "../../Components/BuildTransaction/Transaction/TransactionFormComponent";
import ChooseTransactionTypeComponent from "../../Components/BuildTransaction/ChooseTransactionTypeComponent";
import OperationFormComponent from "../../Components/BuildTransaction/Transaction/OperationForms/OperationFormComponent";
import FeeBumpFormComponent from "../../Components/BuildTransaction/FeeBump/FeeBumpFormComponent";
import SubmitTransaction from "../../Components/BuildTransaction/Transaction/SubmitTransaction";
import TransactionContext from "../../Context/TransactionContext";
const BuildTransaction = props => {
    const [transactionType,setTransactionType] = useState('transaction');
    const [operations,setOperations] = useState([{operation:'', operationData: {}, id:1}]);
    const [transactionBaseInfo,setTransactionBaseInfo] = useState({
        sourceAccount: '',
        transactionSequenceNumber: '',
        baseFee: 100,
        memo: '',
        timeBounds: 0
    });

    return (
        <div>
        <h3>BuildTransaction.jsx</h3>
        <ChooseTransactionTypeComponent transactionType={e=>setTransactionType(e)}/>
        {
            transactionType === "transaction" ? 
            <>
            <TransactionContext.Provider value={{operations,setOperations,transactionBaseInfo,setTransactionBaseInfo}}>
                <div className="X X-fd-column row-gap-2-rem">
                    <TransactionFormComponent />
                    <OperationFormComponent />
                    <SubmitTransaction />
                    {JSON.stringify(transactionBaseInfo)}<br/>
                    {operations.map((op,i)=>{
                        return <div key={i}>{JSON.stringify(op)}<br/></div>
                    })}
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