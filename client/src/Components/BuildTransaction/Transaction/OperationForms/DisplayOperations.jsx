import React, { useState, useContext } from "react";
import DefaultOperationProps from "./DefaultOperationProps";
import PaymentFormComponent from "./PaymentFormComponent";
import TransactionContext from "../../../../Context/TransactionContext";
const setDefaultProps = (operation,data) => {
    const defaultPropsKeywords = DefaultOperationProps[`${operation}-keywords`];
    const defaultProps = DefaultOperationProps[operation];
    for (let x in defaultPropsKeywords) {
        if (data[defaultPropsKeywords[x]] == null) data[defaultPropsKeywords[x]] = defaultProps[x];
    }
    return data;
}
const DisplayOperations = ({id}) => {
    const { operations,setOperations } = useContext(TransactionContext);
    let operationArrayCopy = [...operations];
    operationArrayCopy.find(op=>op.id === id).operationData = setDefaultProps(this.operationData);
    setOperations(operationArrayCopy);
    let data = operations.find(op=>op.id == id).operationData;
    const AllOperations = {
        payment: <PaymentFormComponent data={data} />
    }
    return operation === '' ? null : AllOperations[operation];
}
export default DisplayOperations;