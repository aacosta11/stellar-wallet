import React from "react";
import { Link } from "react-router-dom";
const NotFound = props => {
    return (
        <>
        <div class="vw100 X X-jc-center X-ai-center X-fd-column">
            <h2>404 Error!</h2>
            <p>Get back to safety lumeneer!</p>
            <Link to="/">Home</Link>
        </div>
        </>
    )
}
export default NotFound;