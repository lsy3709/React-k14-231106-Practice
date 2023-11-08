//내장 함수
// concat, filter, map : 함수들의 특징.
// 결론, 새로운 배열을 생성한다.
// 데이터와 연동을 해서 생각.
// 리스트의 요소를 출력할 때, key 라는 부분이 필요.
// 마치, 데이터베이스 인덱스 개념과 비슷.
// 인덱스 있으면, 인덱스를 기준으로 검색해서 빠름.
// 만약, 인덱스 없으면, 풀 스캔을 해야함. 작업의 효율성부분 문제됨.
// 리액트에서 특정의 데이터를 리스트로 출력시, 이런 인덱스 부분 설정.
// 인덱스는 , 반복이 가능한 iterable 한 그룹을 처리하기는 하지만,
// 유니크 , 중복 되면 안됩니다.
// 데이터베이스 pk 처럼 사용하면 됩니다.
// SQL->RDBMS -> 각 테이블 마다, PK 존재함. 그래서, 이 값을 인덱스로 사용하면됨.
// No SQL -> MongoDB (Object ID) -> PK 사용하면 됨.
// 결론, 데이터 연동해서, 리스트 출력시 key 설정 반드시 해야함.

import React, { useState } from "react";

const DataListKeyAddDelTest = () => {
  // test : 상태값 타입 : 배열 , 요소의 타입 : 객체
  // 초깃값 으로 배열로 기본 4개요소 넣고, 더미 데이터
  const [testArr, setTestArr] = useState([
    { id: 1, text: "스프링" },
    { id: 2, text: "부트" },
    { id: 3, text: "안드로이드" },
    { id: 4, text: "리액트" },
  ]);

  // id, text 관련해서 input 태그를 설정.
  const [inputText, setInputText] = useState("");
  // 기본 아이디 4까지 사용했고, 그 이후의 id 값 5부터.
  const [nextId, setNextId] = useState(5);

  //리스트 출력하기. -> 리스트 컴포넌트, 리스트의 아이템 컴포넌트
  // key 값 의무 사항입니다. 하지만, 오류 먼저 확인후 설정 하기.
  const testArrList = testArr.map((item) => <li>{item.id}</li>);

  return (
    <div>
      <ul>{testArrList}</ul>
    </div>
  );
};

export default DataListKeyAddDelTest;
