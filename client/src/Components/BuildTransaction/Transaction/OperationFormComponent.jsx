import React, { useContext } from "react";
import ChooseOperationComponent from "./ChooseOperationComponent";
import DisplayOperations from "./OperationForms/DisplayOperations";
import TransactionContext from "../../../Context/TransactionContext";
import "../../../Styles/operation.css";
const OperationFormComponent = props => {
    const { operations, setOperations } = useContext(TransactionContext); // look at BuildTransaction.jsx for context provider

    const handleOperationDataChange = (id,e) => {
        setTimeout(()=>{
            let operationArrayCopy = [...operations];
            let operationToUpdate = operationArrayCopy.find(op=>op.id === id);
            operationToUpdate.operationData = {...operationToUpdate.operationData,[e.name]:[e.value]}
            setOperations(operationArrayCopy)
        },50)
    }

    // MANAGE OPERATIONS
    const setOperationForThisOne = (operation,id) => { // change selected operation
        let operationArrayCopy = [...operations];
        operationArrayCopy.find((op,i)=>op.id === id).operation = operation;
        setOperations(operationArrayCopy);
    }
    const addAnOperation = () => { // add blank operation
        let operationArrayCopy = [...operations];
        operationArrayCopy.push({operation:'',operationData: {},id:operationArrayCopy[operationArrayCopy.length - 1].id + 1});
        setOperations(operationArrayCopy);
    }
    const duplicateThisOperation = (operation,id) => { // duplicate operation
        let operationArrayCopy = [...operations];
        let operationToCopy = operationArrayCopy.find((op,i)=>op.id === id);
        operationArrayCopy.push({...operationToCopy,id:operationArrayCopy[operationArrayCopy.length - 1].id + 1});
        setOperations(operationArrayCopy);
    }
    const deleteThisOperation = id => { // delete operation
        let operationArrayCopy = operations.filter((op,i)=>op.id  !== id);
        setOperations(operationArrayCopy);
    }
    // END OF MANAGE OPERATIONS

    return (
        <div className="X X-fd-column row-gap-2-rem">
            {/* display all operations from array */}
            {operations.map((op,i)=>{
                return (
                    <div className="X column-gap-1-rem" key={i}>
                        <div className="X X-fd-column X-ai-center row-gap-4-px">
                            {/* list placement number */}
                            <div className="X X-jc-center X-ai-center operation-number-box">
                                <h4>{i + 1}</h4>
                            </div>
                            {/* DUPLICATE */}
                            <div className="duplicate-operation" onClick={e=>duplicateThisOperation(op.operation,op.id)}></div>
                            {/* DELETE */}
                            {operations.length > 1 && <div className="delete-operation transition-ease" onClick={e=>deleteThisOperation(op.id)}></div>}
                        </div>
                        <div className="X X-fd-column width-100-percent">
                            {/* select operation type */}
                            <ChooseOperationComponent setOperation={{setOperationForThisOne}} currentOperation={op.operation} id={op.id}/>
                            {/* operation form */}
                            <div id={op.id} onChange={e=>handleOperationDataChange(op.id,e.target)} >
                                <DisplayOperations id={op.id} />
                            </div>
                        </div>
                    </div>
                )
            })}
            <div className="width-100-percent X X-jc-center">
                {/* add a blank operation */}
                <div id="add-operation" className="transition-ease" onClick={addAnOperation}></div>
            </div>

        </div>
    )
}
export default OperationFormComponent;