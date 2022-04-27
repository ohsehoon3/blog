/* eslint-disable */
import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

// App10-
function App() {
  let [글제목, 글제목변경] = useState(['aaa', 'bbbbb', 'ccccccc']);
  let [누른제목, 누른제목변경] = useState(0);
  let [입력값, 입력값변경] = useState('');

  return ( 
    <div className="App">
      <div className="black-nav">
        <div>개발 blog</div>
      </div>
      <div className="list">
      {
        글제목.map(function(a, i) {
          return (
            <div className="list" key={ i }>
              <h3 onClick={ () => { 누른제목변경(i) } }> { a } <span>👍</span> </h3>
              <p>2월 18일 발행</p>
            <hr/>
            </div>
          )
        }) 
      }
      <input onChange={ (e) => {입력값변경(e.target.value)} }></input>
      {
        <Modal 글제목={글제목} 누른제목={누른제목}></Modal>
      }
      </div>
    </div>
  )
}

function Modal(props) {
  return (
    <div className="modal">
      <h2>제목 { props.글제목[props.누른제목] }</h2>
      <p>날짜</p>
      <p>상세내용</p>
    </div>
  )
}

export default App;
