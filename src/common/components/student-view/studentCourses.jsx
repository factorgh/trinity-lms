/* eslint-disable react/prop-types */
import { Card } from "antd";

const StudentEnrolledCourse = ({ val }) => {
  const { image, title, description } = val;
  return (
    <Card
      onClick={() => {}}
      hoverable
      className="flex flex-col border-slate-300 rounded-lg   text-slate-300  shadow-lg  transition duration-300 cursor-pointer"
      cover={
        <img
          src={image}
          alt={title}
          className="object-cover h-40 w-full rounded-lg shadow-lg border-gray-50"
        />
      }
    >
      <h3 className="text-xl font-bold text-gray-800">{title}</h3>
      <p className="text-sm text-slate-500 mt-2">
        {description.slice(0, 100)} ...
      </p>
      <button className="mx-5">Start watching</button>
    </Card>
  );
};

export default StudentEnrolledCourse;
