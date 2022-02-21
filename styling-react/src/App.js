import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import SassComponent from "./SassComponent";
import CSSModule from "./CSSModule";

class App extends Component {
  render() {
    return (
      <div>
        {/* <SassComponent></SassComponent> */}
        <CSSModule />
      </div>
    );
  }
}

export default App;
