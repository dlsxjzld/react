import React from "react";
import ColorBox from "./components/ColorBox";
import ColorContext from "./contexts/color";

const App = () => {
  return (
    <ColorContext.Provider value={{ color: "red" }}>
      {/* Provider 사용시 value 값을 반드시 명시해 주어야 제대로 작동 */}
      <div>
        <ColorBox></ColorBox>
      </div>
    </ColorContext.Provider>
  );
};

export default App;
