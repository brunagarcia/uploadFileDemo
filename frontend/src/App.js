import React, { Component } from 'react';
import Dropzone from 'react-dropzone'
import axios from 'axios';
import {CollapsibleComponent, CollapsibleHead, CollapsibleContent} from 'react-collapsible-component';
// import logo from './logo.svg';
import './App.css';

class App extends Component {
    constructor(props) {
      super(props);
      this.state = {
        file: []
        }
    }

    fileChangedHandler = (files) => {
        console.log(files)
        axios.post("http://localhost:8080/testPort", files)
            .then(response => {
                console.log(response.data)
                this.setState({
                    file: response.data[0].preview
                })
            })
            .catch(error => {
                console.log(error)
            })
    }
    

  render() {
    return (
      <div className="App">
            <h1> Uploading images to server!!!! </h1>
            <Dropzone onDrop={(files) => this.fileChangedHandler(files)}>
                <div>Try dropping some files here, or click to select files to upload.</div>
            </Dropzone>
            
            <img src={this.state.file} alt="upload"/>

            <CollapsibleComponent>
                <CollapsibleHead className="additionalClassForHead">Head title 1</CollapsibleHead>
                <CollapsibleContent className="additionalClassForContent">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco 
                    laboris nisi ut aliquip ex </p>
                </CollapsibleContent>
 
                <CollapsibleHead isExpanded={true}>Head title 2</CollapsibleHead>
                <CollapsibleContent isExpanded={true}>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco 
                    laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure 
                    dolor in reprehenderit in voluptate velit esse cillum dolore eu 
                    fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, 
                    sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                </CollapsibleContent>
 
                <CollapsibleHead>Head title 3</CollapsibleHead>
                <CollapsibleContent>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco 
                    laboris nisi ut aliquip ex ea commodo consequat. </p>
                </CollapsibleContent>
            </CollapsibleComponent>
            
      </div>
    );
  }
}
export default App;
