import React, { useState } from "react";
import ChooseOperationComponent from "./ChooseOperationComponent";
import PaymentFormComponent from "./OperationForms/PaymentFormComponent";
import "../../../Styles/operation.css";
const OperationFormComponent = props => {
    const [currentOperations, setCurrentOperations] = useState([{operation:'',index:0}]);
    const allOperations = {
        payment: <PaymentFormComponent />
    };
    const setOperationForThisOne = (operation,index) => {
        let operationArrayCopy = [...currentOperations];
        operationArrayCopy[index] = {operation:operation,index:index};
        setCurrentOperations(operationArrayCopy);
    }
    const addAnOperation = () => {
        let operationArrayCopy = [...currentOperations];
        operationArrayCopy.push({operation:'',index:operationArrayCopy.length - 1});
        setCurrentOperations(operationArrayCopy);
    }
    const deleteThisOperation = index => {
        let operationArrayCopy = [...currentOperations];
        operationArrayCopy.splice(index,1);
        setCurrentOperations(operationArrayCopy);
    }
    return (
        <div className="X X-fd-column row-gap-2-rem">

            {currentOperations.map((op,i)=>{
                return (
                    <div className="X column-gap-1-rem" key={i}>
                        <div>
                            <div className="X X-jc-center X-ai-center operation-number-box">
                                <h4>{i + 1}</h4>
                            </div>
                            {i != 0 && <div className="delete-operation transition-ease" onClick={e=>deleteThisOperation(i)}></div>}
                            
                        </div>
                        <div className="X X-fd-column width-100-percent">
                            <ChooseOperationComponent setOperation={{setOperationForThisOne}} index={i}/>
                            {allOperations[op.operation]}
                        </div>
                    </div>
                )
            })}
            <div className="width-100-percent X X-jc-center">
                <div id="add-operation" className="transition-ease" onClick={addAnOperation}></div>
            </div>
        </div>

    )
}
export default OperationFormComponent;