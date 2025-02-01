import React from "react";

const StudntEnrollment = () => {
  return (
    <div className="container mx-auto md:px-36 px-8 pt-10">
      <h1 className="text-2xl font-semibold ">My Enrollment</h1>
      <table className="md:table-auto table-fixed w-full overflow-hidden border mt-10 ">
        <thead className="text-gray-900 border-b border-gray-500/20 text-sm text-left max-sm:hidden">
          <tr>
            <th className="px-4 py-3 font-semibold truncate">Course</th>
            <th className="px-4 py-3 font-semibold truncate">Course</th>
            <th className="px-4 py-3 font-semibold truncate">Course</th>
          </tr>
        </thead>
      </table>
    </div>
  );
};

export default StudntEnrollment;
