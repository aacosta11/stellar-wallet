import React from "react";
import PaymentFormComponent from "./forms/PaymentFormComponent";
const DisplayOperations = ({id, operation}) => {
    // list of each transaction and their components
    const AllOperations = {
        payment: <PaymentFormComponent id={id} />
    }
    return operation === '' ? null : AllOperations[operation];
}
export default DisplayOperations;