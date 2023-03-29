import React, { useState } from 'react'
import './Random.css';
import { Link } from 'react-router-dom';

export default function Random() {
  const [letter, setLetter] = useState('-');
  const [type, setType] = useState('-------');
  const [studentAnswer, setStudentAnswer] = useState("click the button to see alphabet");
  const [count, setCount] = useState(0);
  const [correctAns, setCorrectAns] = useState(0);
  const [wrongAns, setWrongAns] = useState(0);
  const [changeQAbility, setQAbility] = useState("q-button1");
  const [changeAAbility, setAAbility] = useState("a-button2");
  
  const rootLetters = ['j','g','p','q','y'];
  const skyLetters = ['b','d','f','h','l','k','t'];
  const grassLetters = ['a','c','e','i','m','n','o','r','s','u','v','w','x','z'];


  function getLetter(x){
    if (x === 0){
        setLetter(rootLetters[Math.floor(Math.random() * rootLetters.length)]);
        setType(root);
    }
    else if (x === 1){
        setLetter(skyLetters[Math.floor(Math.random() * skyLetters.length)]);
        setType(sky);
    }
    else if (x === 2){
        setLetter(grassLetters[Math.floor(Math.random() * grassLetters.length)]);
        setType(grass);
    }
    setCount(count + 1);
    setStudentAnswer("");
    setQAbility("q-button2");
    setAAbility("a-button1");
    setStudentAnswer("click again & try your best");
  }


  function checkAnswer(myAnswer, actualAnswer) {
    if (myAnswer === actualAnswer){
      setStudentAnswer("WoW, It's correct answer");
      setCorrectAns(correctAns + 1);
    }
    else{
      setStudentAnswer("Wrong answer, try again");
      setWrongAns(wrongAns + 1);
    }
    setAAbility("a-button2");
    setQAbility("q-button1");
  }
  const root = "root letter";
  const sky = "sky letter";
  const grass = "grass letter";


  return (
    <section>
        <div className='games-head'>
          <h4><Link className='back-link' to={'/'}><span><i class='fas fa-arrow-left'></i></span>    Go Back To Home</Link></h4>
          <h1 className='header'>Alphabet Game</h1>
        </div>
        <div className='box'>
        <h3 className='alpha-subhead'>{studentAnswer}</h3>
          <div className='alpha-body-box'>
            <div className='circle'>{letter}</div>
            <div className='bt-box'>
              <button className={changeQAbility} onClick={() => {getLetter(Math.floor(Math.random() * 3))}}>Random letter</button>
              <button className={changeAAbility} onClick={() => {checkAnswer(root, type)}}>root letter</button>
              <button className={changeAAbility} onClick={() => {checkAnswer(sky, type)}}>sky letter</button>
              <button className={changeAAbility} onClick={() => {checkAnswer(grass, type)}}>grass letter</button>
            </div>
            <div className='alpha-ans-box'>
              <h6>Total Question: {count}</h6>
              <h6>Correct Answer: {correctAns}</h6>
              <h6>Wrong Answers: {wrongAns}</h6>
            </div>
          </div>
          
        </div>
    </section>
  );
}
