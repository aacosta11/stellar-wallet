import React from "react";
import "../../wwwroot/style/Components/Dashboard/UserCard.scss";
const UserCard = () => {
    // placeholder for generate button
    const onGenerate = () => {
        console.log("generate!");
    }  
    return (<>
        <div id="userCard" className="x x-fd-column x-jc-space-around " >
            <div id="pub-key" className="" >pub</div>
            <div id="priv-key" className="" >priv</div>
            <button id="generate-keys" onClick={onGenerate}>generate!</button>
        </div>
    </>)
}

export default UserCard;