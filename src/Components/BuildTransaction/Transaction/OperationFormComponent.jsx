import React, { useState } from "react";
import ChooseOperationComponent from "./ChooseOperationComponent";
import PaymentFormComponent from "./OperationForms/PaymentFormComponent";
const OperationFormComponent = props => {
    const [currentOperation, setCurrentOperation] = useState('');
    const allOperations = {
        payment: <PaymentFormComponent />
    };
    
    return (
        <div className="X X-fd-column">
            <ChooseOperationComponent setOperation={{currentOperation,setCurrentOperation}}/>
            {allOperations[currentOperation]}
        </div>
    )
}
export default OperationFormComponent;