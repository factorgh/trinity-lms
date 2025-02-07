import React, { useState } from "react";
import Questions from "./Questions";

import { MoveNextQuestion, MovePrevQuestion } from "../hooks/FetchQuestion";
import { PushAnswer } from "../hooks/setResult";

/** redux store import */
import { useDispatch, useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

export default function Quiz() {
  const [check, setChecked] = useState(undefined);

  const result = useSelector((state) => state.result.result);
  const { queue, trace } = useSelector((state) => state.questions);
  const dispatch = useDispatch();

  /** next button event handler */
  function onNext() {
    if (trace < queue.length) {
      /** increase the trace value by one using MoveNextAction */
      dispatch(MoveNextQuestion());

      /** insert a new result in the array.  */
      if (result.length <= trace) {
        dispatch(PushAnswer(check));
      }
    }

    /** reset the value of the checked variable */
    setChecked(undefined);
  }

  /** Prev button event handler */
  function onPrev() {
    if (trace > 0) {
      /** decrease the trace value by one using MovePrevQuestion */
      dispatch(MovePrevQuestion());
    }
  }

  function onChecked(check) {
    setChecked(check);
  }

  /** finished exam after the last question */
  if (result.length && result.length >= queue.length) {
    return <Navigate to={"/result"} replace={true}></Navigate>;
  }

  return (
    <div className="container">
      <h1 className="title text-light">Quiz Application</h1>

      {/* display questions */}
      <Questions onChecked={onChecked} />

      <div className="grid">
        {trace > 0 ? (
          <button className="btn prev" onClick={onPrev}>
            Prev
          </button>
        ) : (
          <div></div>
        )}
        <button className="btn next" onClick={onNext}>
          Next
        </button>
      </div>
    </div>
  );
}

// /* .container {
//   display: block;
//   position: relative;
//   margin: 40px auto;
//   height: auto;
//   width: 800px;
//   padding: 20px;
// }

// .container .title {
//   font-size: 3em;
//   text-align: center;
//   border: 5px solid var(--primary-color);
//   padding: 0.3em 0.2em;
//   border-radius: 4px;
// }

// .text-light {
//   color: var(--light-color);
// }

// .container ul {
//   list-style: none;
//   margin: 0;
//   padding: 0;
//   overflow: auto;
// }

// .container .questions {
//   padding: 3em;
// }

// /*
// .container .questions .qid{
//   padding: .2em .7em;
//   color: #222222;
//   background-color: #0DFF92;
//   border-radius: 50px;
// } */

// .container .grid {
//   margin-top: 3em;
//   display: grid;
//   grid-template-columns: 1fr 1fr;
// }

// .container .btn {
//   padding: 0.2em 1.7em;
//   border: none;
//   border-radius: 0.1em;
//   font-size: 1.2em;
// }

// .container .btn:hover {
//   cursor: pointer;
//   background-color: #f0f0f0;
//   color: #202020;
// }

// .next {
//   background-color: var(--primary-color);
//   justify-self: flex-end;
// }

// .prev {
//   background-color: #faff5a;
//   justify-self: flex-start;
// }

// ul li {
//   color: #aaaaaa;
//   display: block;
//   position: relative;
//   float: left;
//   width: 100%;
//   height: 100px;
//   border-bottom: 1px solid #333;
// }

// ul li input[type="radio"] {
//   position: absolute;
//   visibility: hidden;
// }

// ul li label {
//   display: block;
//   position: relative;
//   font-weight: 300;
//   font-size: 1.35em;
//   padding: 25px 25px 25px 80px;
//   margin: 10px auto;
//   height: 30px;
//   z-index: 9;
//   cursor: pointer;
//   -webkit-transition: all 0.25s linear;
// }

// ul li:hover label {
//   color: #ffffff;
// }

// ul li .check {
//   display: block;
//   position: absolute;
//   border: 5px solid #aaaaaa;
//   border-radius: 100%;
//   height: 25px;
//   width: 25px;
//   top: 30px;
//   left: 20px;
//   z-index: 5;
//   transition: border 0.25s linear;
//   -webkit-transition: border 0.25s linear;
// }

// ul li:hover .checked {
//   border: 5px solid #ffffff;
// }

// ul li .check::before {
//   display: block;
//   position: absolute;
//   content: "";
//   border-radius: 100%;
//   height: 15px;
//   width: 15px;
//   top: 5px;
//   left: 5px;
//   margin: auto;
//   transition: background 0.25s linear;
//   -webkit-transition: background 0.25s linear;
// }

// input[type="radio"]:checked ~ .check {
//   border: 5px solid var(--primary-color);
// }

// input[type="radio"]:checked ~ .check::before {
//   background: var(--primary-color);
// }

// input[type="radio"]:checked ~ .text-primary {
//   color: var(--primary-color);
// }

// /* To get selected option we are using this checked class */
// .checked {
//   border: 5px solid var(--primary-color) !important;
// }

// .checked::before {
//   background: var(--primary-color);
// } */
