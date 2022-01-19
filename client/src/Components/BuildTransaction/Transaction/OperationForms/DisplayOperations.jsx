import React from "react";
import PaymentFormComponent from "./forms/PaymentFormComponent";
const DisplayOperations = ({id, operation}) => {
    // components for each transaction
    const AllOperations = {
        payment: <PaymentFormComponent id={id} />
    }
    return operation === '' ? null : AllOperations[operation];
}
export default DisplayOperations;