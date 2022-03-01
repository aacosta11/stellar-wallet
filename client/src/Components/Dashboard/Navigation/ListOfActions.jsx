import React from "react";
import BuildTransaction from "../Content/BuildTransaction/BuildTransaction";
import SignTransaction from "../Content/SignTransaction/SignTransaction";
import SubmitTransaction from "../Content/SubmitTransaction/SubmitTransaction";

const ListOfActions = {
    'buildTransaction' : ['Build Transaction',<BuildTransaction />],
    'signTransaction' : ['Sign Transaction',<SignTransaction />],
    'submitTransaction' : ['Submit Transaction',<SubmitTransaction />],
}

export default ListOfActions;