import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import SassComponent from "./SassComponent";
import CSSModule from "./CSSModule";
import StyledComponent from "./StyledComponent";

class App extends Component {
  render() {
    return (
      <div>
        {/* <SassComponent></SassComponent> */}
        {/* <CSSModule /> */}
        <StyledComponent />
      </div>
    );
  }
}

export default App;
