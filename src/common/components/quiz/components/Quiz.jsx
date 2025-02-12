import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { MoveNextQuestion, MovePrevQuestion } from "../hooks/FetchQuestion";
import { PushAnswer } from "../hooks/setResult";
import Questions from "./Questions";

export default function Quiz({ selectedQuiz }) {
  const [check, setChecked] = useState(undefined);
  const result = useSelector((state) => state.result.result);
  const { queue, trace } = useSelector((state) => state.questions);
  const dispatch = useDispatch();

  const progress = ((trace + 1) / queue?.length) * 100; // Progress bar percentage

  function onNext() {
    if (trace < queue.length) {
      dispatch(MoveNextQuestion());
      if (result.length <= trace) {
        dispatch(PushAnswer(check));
      }
    }
    setChecked(undefined);
  }

  function onPrev() {
    if (trace > 0) {
      dispatch(MovePrevQuestion());
    }
  }

  function onChecked(check) {
    setChecked(check);
  }

  if (result.length && result.length >= queue.length) {
    return <Navigate to={"/result"} replace={true} />;
  }

  return (
    <div className="container mx-auto p-6 flex flex-col items-center min-h-screen bg-gray-100">
      <div className="bg-white shadow-lg rounded-lg w-full max-w-2xl p-6">
        {/* Quiz Title */}
        <h1 className="text-3xl font-semibold text-center text-blue-600 mb-4">
          Quiz Section
        </h1>

        {/* Progress Bar */}
        <div className="w-full bg-gray-200 rounded-full h-2.5 mb-6">
          <div
            className="bg-blue-600 h-2.5 rounded-full transition-all"
            style={{ width: `${progress}%` }}
          ></div>
        </div>

        {/* Display Questions */}
        <Questions onChecked={onChecked} />

        {/* Buttons */}
        <div className="flex justify-between mt-8">
          {trace > 0 ? (
            <button
              className="bg-yellow-500 text-white px-6 py-2 rounded-lg shadow-md hover:bg-yellow-400 transition"
              onClick={onPrev}
            >
              Prev
            </button>
          ) : (
            <div></div>
          )}
          <button
            className={`px-6 py-2 rounded-lg shadow-md text-white transition ${
              check !== undefined
                ? "bg-blue-600 hover:bg-blue-500"
                : "bg-gray-400 cursor-not-allowed"
            }`}
            onClick={onNext}
            disabled={check === undefined}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
}
