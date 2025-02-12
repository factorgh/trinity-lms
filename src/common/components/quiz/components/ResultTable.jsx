import React, { useEffect, useState } from "react";
import { getServerData } from "../helper/helper";

export default function ResultTable() {
  const [data, setData] = useState([]);

  useEffect(() => {
    getServerData(
      `${process.env.REACT_APP_SERVER_HOSTNAME}/api/result`,
      (res) => {
        setData(res);
      }
    );
  }, []);

  return (
    <div className="overflow-x-auto">
      <table className="w-full border-collapse border border-gray-300 rounded-lg shadow-md">
        {/* Table Header */}
        <thead className="bg-gray-100 text-gray-700">
          <tr className="text-left">
            <th className="p-3 border-b">Name</th>
            <th className="p-3 border-b">Attempts</th>
            <th className="p-3 border-b">Earned Points</th>
            <th className="p-3 border-b">Result</th>
          </tr>
        </thead>

        {/* Table Body */}
        <tbody className="divide-y divide-gray-200">
          {data.length === 0 ? (
            <tr>
              <td colSpan="4" className="text-center p-4 text-gray-500">
                No Data Found
              </td>
            </tr>
          ) : (
            data.map((v, i) => (
              <tr
                key={i}
                className="hover:bg-gray-50 transition-all even:bg-gray-50"
              >
                <td className="p-3 border-b">{v?.username || "N/A"}</td>
                <td className="p-3 border-b">{v?.attempts || 0}</td>
                <td className="p-3 border-b">{v?.points || 0}</td>
                <td
                  className={`p-3 border-b font-semibold ${
                    v?.achieved === "Pass" ? "text-green-600" : "text-red-500"
                  }`}
                >
                  {v?.achieved || "N/A"}
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}
