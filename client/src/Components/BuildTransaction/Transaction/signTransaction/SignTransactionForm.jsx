import React, { useEffect, useState } from "react";
import "../../../../Styles/signTransactionForm.css";
const SignTransactionForm = props => {
    const labels = ["signing for","transaction envelope XDR","source account","sequence number","number of operations","number of signatures"]
    const [dataBoxes,setDataBoxes] = useState();

    return (<>
        <div className="box-grid column-gap-4-px">
            <div className="G column row-gap-2-px">

                {labels.map((label,i)=>{
                    return (<>
                    <div className="X X-ai-center label" key={i}>
                        <h4>{label}</h4>
                    </div>
                    </>)
                })}
                
            </div>
            <div className="G column row-gap-2-px">
                {labels.map((l,i)=>{
                    return (<>
                    <div className="data"></div>
                    </>)
                })}
            </div>

        </div>
    </>)
}
export default SignTransactionForm;