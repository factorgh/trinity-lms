import React, { useState } from "react";
import Questions from "./Questions";

import { MoveNextQuestion, MovePrevQuestion } from "../hooks/FetchQuestion";
import { PushAnswer } from "../hooks/setResult";

/** redux store import */
import { useDispatch, useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

/******  d775d60c-8d61-4ab9-96b4-0fa9fe6b3390  *******/ export default function Quiz({
  selectedQuiz,
}) {
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
    <div className="container mx-auto p-5">
      <h1 className="text-3xl text-center text-light border-4 border-primary py-2 rounded-md">
        Quiz Application
      </h1>

      {/* display questions */}
      <Questions onChecked={onChecked} />

      <div className="grid grid-cols-2 gap-4 mt-12">
        {trace > 0 ? (
          <button
            className="bg-yellow-300 py-2 px-8 rounded-md text-lg hover:bg-yellow-200"
            onClick={onPrev}
          >
            Prev
          </button>
        ) : (
          <div></div>
        )}
        <button
          className="bg-primary py-2 px-8 rounded-md text-lg text-white hover:bg-primary-dark justify-self-end"
          onClick={onNext}
        >
          Next
        </button>
      </div>
    </div>
  );
}
