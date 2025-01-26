/* eslint-disable react/prop-types */
import { Card } from "antd";
import { MdArrowForward } from "react-icons/md";

const CourseItem = ({ val, i, handleCourseView }) => {
  console.log(i);
  const { image, title, description, level } = i;
  return (
    <Card
      onClick={() => handleCourseView(i)}
      hoverable
      className="flex flex-col border-slate-300 rounded-lg   text-slate-300  shadow-3xl"
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
      <div className="flex justify-between items-center mt-4">
        <p className="text-gray-500 font-bold flex items-center gap-3">
          {level} <MdArrowForward />
        </p>
        {/* <Button type="primary" className="bg-blue-500">
          Learn More
        </Button> */}
      </div>
    </Card>
  );
};

export default CourseItem;
