import React from "react";

// imports of network interaction components
import BuildTransaction from "../Content/BuildTransaction/BuildTransaction";
import SignTransaction from "../Content/SignTransaction/SignTransaction";
import SubmitTransaction from "../Content/SubmitTransaction/SubmitTransaction";

// object of network interactions (key: network name, value: network interaction component)
const ListOfActions = {
    'buildTransaction' : ['Build Transaction',<BuildTransaction />],
    'signTransaction' : ['Sign Transaction',<SignTransaction />],
    'submitTransaction' : ['Submit Transaction',<SubmitTransaction />],
}

export default ListOfActions;