import React, { useState } from "react";
import Counter from "./Counter";
import Info from "./Info";
import Average from "./Average";

const App = () => {
  const [visible, setVisible] = useState(false);

  return (
    <div>
      {/* <Counter></Counter> */}
      <button
        onClick={() => {
          setVisible(!visible);
        }}
      >
        {visible ? "숨기기" : "보이기"}
      </button>
      <hr />
      {visible && <Info></Info>}
      {/* <Average></Average> */}
    </div>
  );
};

export default App;
