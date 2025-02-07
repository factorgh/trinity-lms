import React from "react";
import { Link } from "react-router-dom";

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
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl text-center text-white font-bold mb-8">
        Quiz Application
      </h1>

      <div className="flex flex-col items-center border p-8 gap-4">
        <div className="flex justify-between w-full text-lg text-gray-300">
          <span>Username</span>
          <span className="font-bold">{userId || ""}</span>
        </div>
        <div className="flex justify-between w-full text-lg text-gray-300">
          <span>Total Quiz Points : </span>
          <span className="font-bold">{totalPoints || 0}</span>
        </div>
        <div className="flex justify-between w-full text-lg text-gray-300">
          <span>Total Questions : </span>
          <span className="font-bold">{queue.length || 0}</span>
        </div>
        <div className="flex justify-between w-full text-lg text-gray-300">
          <span>Total Attempts : </span>
          <span className="font-bold">{attempts || 0}</span>
        </div>
        <div className="flex justify-between w-full text-lg text-gray-300">
          <span>Total Earn Points : </span>
          <span className="font-bold">{earnPoints || 0}</span>
        </div>
        <div className="flex justify-between w-full text-lg text-gray-300">
          <span>Quiz Result</span>
          <span
            className={`font-bold ${flag ? "text-green-400" : "text-red-600"}`}
          >
            {flag ? "Passed" : "Failed"}
          </span>
        </div>
      </div>

      <div className="mt-6 text-center">
        <Link
          className="bg-blue-500 text-white py-2 px-6 rounded-lg shadow-lg hover:bg-blue-600"
          to={"/"}
          onClick={onRestart}
        >
          Restart
        </Link>
      </div>

      <div className="mt-8">
        {/* result table */}
        <ResultTable />
      </div>
    </div>
  );
}
