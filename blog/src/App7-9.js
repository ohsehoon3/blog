/* eslint-disable */
import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

// map 사용 
function App() {
  let [글제목, 글제목변경] = useState(['논산', '강남', '동대문']);
  return ( 
    글제목.map( (a) => { 
      {/* a는 글제목 안에 있던 하나하나의 데이터 */}
      return (
      <div className="list">
        <h3> {a} </h3> {/* 글제목에 담긴 데이터 하나하나 출력됨 (총3번) */}
        <hr/>
        <Modal 글제목={글제목}/>
      </div>
      )
    })
  )
}
/* // 일반 for반복문 사용
function App() {
  function 반복된UI(){
    var 어레이 = [];
    for (var i = 0; i < 3; i++) {
      어레이.push(<div>안녕</div>)
    }
    return 어레이
  }
  return (
    <div>
      HTML 잔뜩있는 곳
      
      { 반복된UI() }
    </div>
  )
} */

function Modal(props) {
  return (
    <div className="modal">
      <h2>제목 { props.글제목 }</h2>
      <p>날짜</p>
      <p>상세내용</p>
    </div>
  )
}

export default App;
