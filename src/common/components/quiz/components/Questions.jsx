import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useFetchQestion } from "../hooks/FetchQuestion";
import { updateResult } from "../hooks/setResult";

export default function Questions({ onChecked }) {
  const { trace } = useSelector((state) => state.questions);
  const result = useSelector((state) => state.result.result);
  const [{ isLoading, apiData, serverError }] = useFetchQestion();
  const questions = useSelector(
    (state) => state.questions.queue[state.questions.trace]
  );

  const quest = useSelector((state) => state.questions.queue);
  console.log(quest);

  console.log(questions);
  const dispatch = useDispatch();
  const [checked, setChecked] = useState(result[trace]); // Ensure state sync

  useEffect(() => {
    if (checked !== undefined) {
      dispatch(updateResult({ trace, checked }));
    }
  }, [checked, dispatch, trace]);

  function onSelect(i) {
    setChecked(i);
    onChecked(i);
    dispatch(updateResult({ trace, checked }));
  }

  if (isLoading) return <h3 className="text-light">isLoading</h3>;
  if (serverError)
    return <h3 className="text-light">{serverError || "Unknown Error"}</h3>;

  return (
    <div className="bg-white shadow-md rounded-lg p-6">
      <h2 className="text-xl font-semibold text-gray-800 mb-4">
        {questions?.question}
      </h2>

      <ul className="space-y-3">
        {questions?.options.map((q, i) => (
          <li key={i} className="flex items-center">
            <input
              type="radio"
              name="options"
              id={`q${i}-option`}
              checked={checked === i} // ✅ Keeps track of the selected option
              onChange={() => onSelect(i)}
              className="hidden peer"
            />
            <label
              htmlFor={`q${i}-option`}
              className={`w-full p-3 border rounded-lg cursor-pointer transition-all ${
                checked === i
                  ? "bg-blue-500 text-white border-blue-500"
                  : "bg-gray-100 text-gray-700 border-gray-300 hover:bg-blue-100"
              }`}
            >
              {q}
            </label>
          </li>
        ))}
      </ul>
    </div>
  );
}
