import React from "react";
import { Link } from "react-router-dom";
import "../styles/Result.css";

import { useDispatch, useSelector } from "react-redux";
import {
  attempts_Number,
  earnPoints_Number,
  flagResult,
} from "../helper/helper";
import ResultTable from "./ResultTable";

/** import actions  */
import { usePublishResult } from "../hooks/setResult";
import { resetAllAction } from "../redux/question_reducer";
import { resetResultAction } from "../redux/result_reducer";

export default function Result() {
  const dispatch = useDispatch();
  const {
    questions: { queue, answers },
    result: { result, userId },
  } = useSelector((state) => state);

  const totalPoints = queue.length * 10;
  const attempts = attempts_Number(result);
  const earnPoints = earnPoints_Number(result, answers, 10);
  const flag = flagResult(totalPoints, earnPoints);

  /** store user result */
  usePublishResult({
    result,
    username: userId,
    attempts,
    points: earnPoints,
    achived: flag ? "Passed" : "Failed",
  });

  function onRestart() {
    dispatch(resetAllAction());
    dispatch(resetResultAction());
  }

  return (
    <div className="container">
      <h1 className="title text-light">Quiz Application</h1>

      <div className="result flex-center">
        <div className="flex">
          <span>Username</span>
          <span className="bold">{userId || ""}</span>
        </div>
        <div className="flex">
          <span>Total Quiz Points : </span>
          <span className="bold">{totalPoints || 0}</span>
        </div>
        <div className="flex">
          <span>Total Questions : </span>
          <span className="bold">{queue.length || 0}</span>
        </div>
        <div className="flex">
          <span>Total Attempts : </span>
          <span className="bold">{attempts || 0}</span>
        </div>
        <div className="flex">
          <span>Total Earn Points : </span>
          <span className="bold">{earnPoints || 0}</span>
        </div>
        <div className="flex">
          <span>Quiz Result</span>
          <span
            style={{ color: `${flag ? "#2aff95" : "#ff2a66"}` }}
            className="bold"
          >
            {flag ? "Passed" : "Failed"}
          </span>
        </div>
      </div>

      <div className="start">
        <Link className="btn" to={"/"} onClick={onRestart}>
          Restart
        </Link>
      </div>

      <div className="container">
        {/* result table */}
        <ResultTable></ResultTable>
      </div>
    </div>
  );
}

/* 

.flex-center{
    display: flex;
    justify-content: center;    
    flex-direction: column;
    border: 1px solid #cecece;
    padding: 3em 4em;
    gap: 1em;
}

.container .flex{
    display: flex;
    justify-content: space-between;
    
}

.container .flex span {
    font-size: 1.4em;
    color: #cecece;
}

.container .flex span.achive {
    font-weight: bold;
    color: #ff2a66;
    color: #2aff95;
}

table {
    width: 100%;
}

.table-header {
    color: #cecece;
    font-size: 1.1em;
    text-align: center;
    background: #212121;
    padding: 18px 0;
}

.table-body {
    font-size: 1.1em;
    text-align: center;
    /* color: #cecece; */
/* background: #d8d8d8;
    padding: 18px 0; */
/* } */

/* .table-header > tr > td{
    border: 1px solid #faff5a;   
} */
