import React from "react";
import Projects from "./Projects";

function ProjectList(props) {
    return (<div className="projects">
        <h3 id="currentProj">My Current Projects</h3>
        <ul className="links">
            {props.projects.map(p => <Projects key={p.id} link={p.link} enTitle={p.enTitle} enDesc={p.enDesc} />)}
        </ul>
    </div>);
}

export default ProjectList;