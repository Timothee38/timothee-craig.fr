import React from "react";

function Frontpage(props) {
    return (
        <div className="titles">
            <h1>{props.bigTitle}</h1>
            <h2 id="subTitle">{props.enDesc}</h2>
        </div>
    );
}

export default Frontpage;