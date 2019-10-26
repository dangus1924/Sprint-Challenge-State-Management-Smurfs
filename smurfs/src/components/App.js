import React, { Component } from "react";
import SmurfForm from './SmurfForm';

import "./App.css";



class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>SMURFS!</h1>
        <SmurfForm />
        
      </div>
    );
  }
}

export default App;
