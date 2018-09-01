import React from "react";

function Contact(props) {
    if(props.link != null) {
        return <li><a target="_blank" rel="noopener noreferrer" href={props.link}>{props.enTitle}</a></li>;
    }
    return <li>{props.enTitle}</li>;
}

export default Contact;
