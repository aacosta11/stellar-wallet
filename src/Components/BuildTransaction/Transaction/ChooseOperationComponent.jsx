import React from "react";
const ChooseOperationComponent = ({setOperation, id, currentOperation}) => {
    const { setOperationForThisOne } = setOperation;
    const handleOperationSelection = e => {
        setOperationForThisOne(e.target.value,id);
    }
    return (
        <div className="X X-fd-column">
                <label htmlFor="operation-type">Operation Type: </label>
                <select name="operation-type" id="operation-type"
                onChange={handleOperationSelection} value={currentOperation}
                >
                    <option value="">Select operation type</option>
                    <option value="createAccount" disabled>Create Account</option>
                    <option value="payment">Payment</option>
                    <option value="pathPaymentStrictSend" disabled>Path Payment Strict Send</option>
                    <option value="pathPaymentStrictReceive" disabled>Path Payment Strict Receive</option>

                    {/* new options will be added slowly */}
                    {/* <option value="manageSellOffer" disabled>Manage Sell Offer</option>
                    <option value="manageBuyOffer" disabled>Manage Buy Offer</option>
                    <option value="createPassiveSellOffer" disabled>Create Passive Sell Offer</option>
                    <option value="setOptions" disabled>Set Options</option>
                    <option value="changeTrust" disabled>Change Trust</option>
                    <option value="allowTrust" disabled>Allow Trust</option>
                    <option value="accountMerge" disabled>Account Merge</option>
                    <option value="manageData" disabled>Manage Data</option>
                    <option value="bumpSequence" disabled>Bump Sequence</option>
                    <option value="createClaimableBalance" disabled>Create Claimable Balance</option>
                    <option value="claimClaimableBalance" disabled>Claim Claimable Balance</option>
                    <option value="beginSponsoringFutureReserves" disabled>Begin Sponsoring Future Reserves</option>
                    <option value="endSponsoringFutureReserves" disabled>End Sponsoring Future Reserves</option>
                    <option value="revokeSponsorship" disabled>Revoke Sponsorship</option>
                    <option value="clawback" disabled>Clawback</option>
                    <option value="clawbackClaimableBalance" disabled>Clawback Claimable Balance</option>
                    <option value="setTrustLineFlags" disabled>Set Trust Line Flags</option>
                    <option value="liquidityPoolDeposit" disabled>Liquidity Pool Deposit</option>
                    <option value="liquidityPoolWithdraw" disabled>Liquidity Pool Withdraw</option> */}
                </select>
            
        </div>
    )
}
export default ChooseOperationComponent;