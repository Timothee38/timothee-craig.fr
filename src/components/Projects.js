import React from "react";

function Projects(props) {
    if(props.link!=null) {
        return (<li>
            <a target="_blank" rel="noopener noreferrer" href={props.link}>{props.enTitle}</a>
            <p>{props.enDesc}</p>
        </li>);
    }
    return (<li>
        {props.enTitle}
        <p>{props.enDesc}</p>
    </li>);
}

export default Projects;
