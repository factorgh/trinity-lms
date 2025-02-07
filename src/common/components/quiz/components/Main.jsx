import React, { useRef } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { setUserId } from "../redux/result_reducer";

export default function Main() {
  const inputRef = useRef(null);
  const dispatch = useDispatch();

  function startQuiz() {
    if (inputRef.current?.value) {
      dispatch(setUserId(inputRef.current?.value));
    }
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white p-6">
      <h1 className="text-3xl font-bold mb-6 text-yellow-300">
        Quiz Application
      </h1>

      <ol className="list-decimal list-inside text-lg text-gray-300 space-y-2">
        <li>You will be asked 10 questions one after another.</li>
        <li>10 points are awarded for each correct answer.</li>
        <li>
          Each question has three options. You can choose only one option.
        </li>
        <li>You can review and change answers before the quiz finishes.</li>
        <li>The result will be declared at the end of the quiz.</li>
      </ol>

      <form className="flex justify-center mt-10 w-full">
        <input
          ref={inputRef}
          type="text"
          placeholder="Username*"
          className="w-1/2 p-3 text-lg border border-gray-700 rounded-md bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-300"
        />
      </form>

      <div className="mt-8">
        <Link
          to="quiz"
          onClick={startQuiz}
          className="px-6 py-3 text-lg font-semibold text-gray-900 bg-yellow-300 rounded-md shadow-md hover:bg-yellow-400 transition-all duration-300"
        >
          Start Quiz
        </Link>
      </div>
    </div>
  );
}
