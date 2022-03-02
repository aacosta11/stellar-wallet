import React from "react";

// imports of network interaction components
import BuildTransaction from "./BuildTransaction/BuildTransaction";
import SignTransaction from "./SignTransaction/SignTransaction";
import SubmitTransaction from "./SubmitTransaction/SubmitTransaction";

// object of network interactions (key: network name, value: network interaction component)
const ListOfActions = {
    'buildTransaction' : ['Build Transaction',<BuildTransaction />],
    'signTransaction' : ['Sign Transaction',<SignTransaction />],
    'submitTransaction' : ['Submit Transaction',<SubmitTransaction />],
}

export default ListOfActions;