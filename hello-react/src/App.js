import React, { Fragment } from "react";
import "./App.css";

function App() {
  const name = "리액트";
  return (
    <div className="react">
      {/* if문 대신 조건부 연산자 */}
      {/* {name === "리액트" ? <h1>리액트입니다.</h1> : <h2>리액트가 아닙니다.</h2>} */}
      {/* AND 연산자를 사용한 조건부 렌더링 */}
      {/* {name === "리액트" && <h1>리액트입니다.</h1>} */}
      {name}
    </div>
  );
}

export default App;
