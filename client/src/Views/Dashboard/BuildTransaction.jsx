import React, { useState } from "react";
import TransactionFormComponent from "../../Components/BuildTransaction/Transaction/TransactionFormComponent";
import ChooseTransactionTypeComponent from "../../Components/BuildTransaction/ChooseTransactionTypeComponent";
import OperationFormComponent from "../../Components/BuildTransaction/Transaction/OperationForms/OperationFormComponent";
import FeeBumpFormComponent from "../../Components/BuildTransaction/FeeBump/FeeBumpFormComponent";
import SubmitTransaction from "../../Components/BuildTransaction/Transaction/SubmitTransaction";
import TransactionContext from "../../Context/TransactionContext";
const BuildTransaction = props => {
    // local state to control selected transaction type
    const [transactionType,setTransactionType] = useState('transaction');
    // global list of user operations
    const [operations,setOperations] = useState([{operation:'', operationData: {}, id:1}]);
    // global object with transaction's meta details
    const [transactionBaseInfo,setTransactionBaseInfo] = useState({
        network: "testnet",
        sourceAccount: '',
        transactionSequenceNumber: '',
        baseFee: 100,
        memo: '',
        timeBounds: 0
    });

    return (
        <div>
        <h3>BuildTransaction.jsx</h3>
        {/* TRANSACTION TYPE */}
        <ChooseTransactionTypeComponent transactionType={e=>setTransactionType(e)}/>
        {
            transactionType === "transaction" ? 
            <>
            <TransactionContext.Provider value={{operations,setOperations,transactionBaseInfo,setTransactionBaseInfo}}>
                <div className="X X-fd-column row-gap-2-rem">
                    {/* TRANSACTION BASE FORM */}
                    <TransactionFormComponent />
                    {/* OPERATION FORMS */}
                    <OperationFormComponent />
                    {/* SUBMIT FORM */}
                    <SubmitTransaction />

                    {/* temp display */}
                    {JSON.stringify(transactionBaseInfo)}<br/>
                    {operations.map((op,i)=>{
                        return <div key={i}>{JSON.stringify(op)}<br/></div>
                    })}
                </div>
            </TransactionContext.Provider>
            </>
            :
            <>
            {/* FEE BUMP FORM */}
            <FeeBumpFormComponent />
            </>
        }
        </div>
    )
}
export default BuildTransaction;