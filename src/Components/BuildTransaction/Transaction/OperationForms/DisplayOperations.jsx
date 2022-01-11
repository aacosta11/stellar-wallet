import React, { useState } from "react";
import DefaultOperationProps from "./DefaultOperationProps";
import PaymentFormComponent from "./PaymentFormComponent";

const setDefaultProps = (operation,data) => {
    const defaultPropsKeywords = DefaultOperationProps[`${operation}-keywords`];
    const defaultProps = DefaultOperationProps[operation];
    for (let x in defaultPropsKeywords) {
        if (data[defaultPropsKeywords[x]] == null) data[defaultPropsKeywords[x]] = defaultProps[x];
    }
    return data;
}
const DisplayOperations = ({operation,data}) => {
    const [dataToDisplay,setDataToDisplay] = useState(setDefaultProps(operation,data));

    const AllOperations = {
        payment: <PaymentFormComponent data={{dataToDisplay,setDataToDisplay}} />
    }
    return operation === '' ? null : AllOperations[operation];
}
export default DisplayOperations;