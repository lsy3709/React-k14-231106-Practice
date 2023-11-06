// js import 키워드를 사용하는데,
// 탈 웹브라우저, 즉, 로컬에서, 자바스크립트 이용한다.
// node -> 리액트 프로젝트 생성 -> 그 프로젝트 내에서, 특정 기능(npm ) 설치 가능.
import React, { Fragment } from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  // JSX 문법 모양 소개
  // return 이라는 키워드 아래에, html 태그들이 사용이 되고 있음.
  // return React.createElement(
  //   "div",
  //   null,
  //   "Hello",
  //   React.createElement("b", null, "react")
  // );
  // const name = "이상용";
  // return (
  //   <>
  //     <h1>hello React {name}</h1>
  //     <h2>동작 잘하나요?</h2>
  //   </>
  // );
  // if 대신에 jsx 에서 조건부 연산자 이용.
  // const : 상수처럼 사용, 안드로이드 val
  // let : 변수처럼 사용, 안드로이드 var
  // const name = "이상용";
  // // {조건식 ? (참 실행될 문장) : ( 거짓 실행될 문장)}
  // return <div>{name === "이상용2" ? <h1>이상용이 맞네</h1> : null}</div>;
  // const name = "이상용";
  // const number = 0;
  // && 2가지 조건이 참이 되어야 실행이 되는데,
  // 앞에 조건이 거짓이면, 뒤에 조건을 안봄.
  // return <div>{name === "이상용" && <h1>이상용이 맞네</h1>}</div>;
  // return <div>{number && <h1>이상용이 맞네</h1>}</div>;
  // undefined 렌더링 안하기.
  // 대책 ||(or 연산자)를 이용해서, 체크.
  // const name = undefined;
  // return name || "값이 undefined 입니다. ";

  // 인라인 스타일링 기본
  const name = "이상용";
  // 스타일 정의 해서 사용했고,

  // const style = {backgroundColor: "red", color: "yellow", fontSize: "50px" };

  // 바로 사용도 가능함.
  return (
    <div style={{ backgroundColor: "red", color: "yellow", fontSize: "50px" }}>
      {name}
      <div className="reactTest">이상용2</div>
    </div>
  );
}

export default App;
