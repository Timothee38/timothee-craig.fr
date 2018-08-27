import React from "react";
import Contact from "./Contact";

function ContactList(props) {
    return (
    <div className="contacts">
        <h3 id="contact">Contact &amp; Profiles</h3>
        <ul className="links"> 
            {props.contact.map(c => <Contact key={c.id} link={c.link} enTitle={c.enTitle} />)}
        </ul>
    </div>);
}

export default ContactList;