/* eslint-disable */
import React, { useState } from 'react'; 
import logo from './logo.svg';
import './App.css';

function App() {
  // state 방식 : 데이터 변경시 자동 재렌더링 됨.
  let [글제목, 글제목변경] = useState(['남자 코트 추천', '토요 서면 맛집', '일요 광장']);
  let [날짜, 날짜변경] = useState(['4월 22일 발행', '4월 23일 발행', '4월 24일 발행']);
  let [따봉, 따봉변경] = useState(0);
  let posts = '강남 고기 맛집';
  
  let [modal, modal변경] = useState(false);
  // function 제목바꾸기() {
  //   var newArray = [...글제목]; // state 값 변경 방법 : deep copy, 값 공유가 아닌 복사
  //   newArray[0] = '여자 코트 추천';
  //   글제목변경( newArray );
  // }
  // function 정렬하기() {
  //   var newArray = [...글제목];
  //   글제목변경( newArray.sort() );
  // }

  // 리액트 중괄호 안에서 if문 사용 불가, 삼항연산자를 이용
  return (
    <div className="App">
      <div className="black-nav">
        <div>개발 blog</div>
      </div>
      <button onClick={ 제목바꾸기 }>제목바꾸기 버튼</button>
      <button onClick={ 정렬하기 }>정렬하기 버튼</button> 
      <button onClick={ () => { modal변경(!modal) } }> 열기버튼 </button>
      { modal === true ? <Modal /> : null } 
      <div className="list">
        <h3> { 글제목[0] } <span onClick={ ()=>{ 따봉변경(따봉+1) } }>👍</span> {따봉} </h3>
        <p> { 날짜[0] } </p>
        <hr/>
      </div>
      <div className="list">
        <h3> { 글제목[1] } </h3>
        <p> { 날짜[1] } </p>
        <hr/>
      </div>
      <div className="list">
        <h3> { 글제목[2] } </h3>
        <p> { 날짜[2] } </p>
        <hr/>
      </div>
    </div>
  );
} 

function Modal() {
  // Component 특
  // 1. 이름은 대괄호
  // 2. return() 안에 있는건 태그 하나로 묶어야 함.
  // 3. 의미없는 div쓰기 싫으면 <></>(fregment) 사용하기
  // Component 활용
  // 1. 반복되는 HTML덩어리 일 때
  // 2. 자주 변경되는 HTML UI들
  // 3. 다른 페이지로 만들 때
  // Component 단점
  // state 쓸 때 복잡, props 문법 이용해야함
  return (
    <div className="modal">
      <h2>제목</h2>
      <p>날짜</p>
      <p>상세내용</p>
    </div>
  )
}

export default App;
