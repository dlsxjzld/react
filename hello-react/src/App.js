import React, { Component } from "react";
import ScrollBox from "./ScrollBox";
// import ValidationSample from "./ValidationSample";

class App extends Component {
  render() {
    return (
      <div>
        <ScrollBox
          ref={(ref) => {
            this.scrollbox = ref;
          }}
        />
        <button onClick={() => this.scrollbox.scrollToBottom()}>
          맨 밑으로
        </button>
        <button onClick={() => this.scrollbox.scrollToTop()}>맨 위로</button>
      </div>
    );
    //  <ValidationSample></ValidationSample>;
  }
}

export default App;
