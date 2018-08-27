import React from "react";
import Projects from "./Projects";

function ProjectList(props) {
    return (<div class="projects">
        <h3 id="currentProj">My Current Projects</h3>
        <ul class="links">
            {props.projects.map(p => <Projects link={p.link} enTitle={p.enTitle} enDesc={p.enDesc} />)}
        </ul>
    </div>);
}

export default ProjectList;