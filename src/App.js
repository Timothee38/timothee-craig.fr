import React, { Component } from 'react';
import axios from "axios";
import './css/style.css';

import Frontpage from "./components/Frontpage";
import ContactList from './components/ContactList';
import ProjectList from './components/ProjectList';

class App extends Component {

  state = {
    frontpage: Frontpage,
    contact: [],
    projects: []
  };

  componentDidMount() {
    axios
      .get("http://localhost:8080/frontpage")
      .then(response => {
        // create a new "State" object without mutating 
        // the original State object. 
        const newState = Object.assign({}, this.state, {
          frontpage: response.data
        });
        // store the new state object in the component's state
        this.setState(newState);}).catch(error => console.log(error));
    
    axios
      .get("http://localhost:8080/contact")
      .then(response => { 
        const newState = Object.assign({}, this.state, {
          contact: response.data
        });
        // store the new state object in the component's state
        this.setState(newState);
      }).catch(error => console.log(error));

    axios
      .get("http://localhost:8080/projects")
      .then(response => { 
        const newState = Object.assign({}, this.state, {
          projects: response.data
        });
        // store the new state object in the component's state
        this.setState(newState);
      }).catch(error => console.log(error));

      axios
        .get("http://localhost:8080/images")
        .then(response => { 
          document.getElementById('root').style.background = "#D9D6CA url('"+ response.data.path +"') no-repeat center center fixed";
        }).catch(error => console.log(error));

  }

  render() {
    return (
      <div className="wrapper">
            <Frontpage bigTitle={this.state.frontpage.bigTitle} enDesc={this.state.frontpage.enDesc} />
            <ContactList contact={this.state.contact} />
            <ProjectList projects={this.state.projects} />
      </div>
    );
  }
}

export default App;
