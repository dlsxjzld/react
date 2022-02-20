import React, { useState, useEffect } from "react";

//useEffect 는 리액트 컴포넌트가 렌더링될 때마다
//특정 작업을 수행하도록 설정할 수 있는 Hook
// 클래스형 컴포넌트의 componentDidMount와
// componentDidUpdate를 합친형태로 봐도 무방하다
const Info = () => {
  const [name, setName] = useState("");
  const [nickname, setNickname] = useState("");

  // useEffect(() => {
  //   console.log("렌더링이 완료되었습니다.");
  //   console.log({ name, nickname });
  // });

  // useEffect(() => {
  //   console.log("마운트될 때만 실행됩니다.");
  //   // 업데이트 될 때는 실행하지 않으려면
  //   // 함수 두 번째 파라미터에 빈 배열 추가
  // }, []);

  // useEffect(() => {
  //   //특정 값이 업데이트될 때만 실행하고 싶을 때
  //   console.log(name);
  // }, [name]);

  useEffect(() => {
    // 컴포넌트가 언마운트되기 전이나 업데이트되기 직전에
    // 어떠한 작업을 수행하고 싶다면 cleanup함수를 반환해야한다
    console.log("effect");
    console.log(name);
    return () => {
      console.log("cleanup");
      console.log(name);
    };
  }, [name]);

  const onChangeName = (e) => {
    setName(e.target.value);
  };

  const onChangeNickname = (e) => {
    setNickname(e.target.value);
  };

  return (
    <div>
      <div>
        <input value={name} onChange={onChangeName}></input>
        <input value={nickname} onChange={onChangeNickname}></input>
      </div>
      <div>
        <div>
          <b>이름 :</b> {name}
        </div>
        <div>
          <b>닉네임 :</b> {nickname}
        </div>
      </div>
    </div>
  );
};

export default Info;
