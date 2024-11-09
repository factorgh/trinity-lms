import "antd/dist/reset.css";
import React from "react";
import { Link } from "react-router-dom";

const CourseCard = ({ val, handleCourseView, i }) => {
  return (
    <div
      onClick={() => handleCourseView(val)}
      key={i}
      className="flex flex-col w-full  bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 transform hover:scale-105"
    >
      {/* Course Image */}
      <div className="relative">
        <img
          src={val.image}
          alt={val.category}
          className="w-full h-40 object-cover"
        />
        <div
          className="absolute top-0 right-0 bg-[#26C976] text-white py-1 px-3 rounded-bl-lg"
          style={{ zIndex: 10 }}
        >
          Free
        </div>
      </div>

      {/* Course Content */}
      <div className="px-4 py-3 flex flex-col flex-grow">
        {/* Category and Rating */}
        <div className="flex justify-between items-center">
          <div className="bg-[#26C976] text-white text-sm rounded-md px-2 py-1">
            <Link to="/" className="text-white">
              {val.category.length > 20
                ? `${val.category.slice(0, 20)}...`
                : val.category}
            </Link>
          </div>
          <div className="flex items-center text-[0.5px] text-gray-600">
            {/* <Rate
              disabled
              defaultValue={val.rating}
              className="mr-1 sm:hidden"
            /> */}
            <span>{val.reviewCount}</span>
          </div>
        </div>

        {/* Title */}
        {/* <Link
          to="/course-single"
          className="text-xl font-semibold text-gray-800 mt-2 hover:text-[#26C976]"
        >
          {val.title}
        </Link> */}

        {/* Course Details */}
        <div className="flex justify-between mt-3 text-sm text-gray-600">
          <div className="flex items-center">
            <i className="icofont-video-alt text-[#26C976] mr-1"></i>
            <span>{val.totalLessons} Lessons</span>
          </div>
          <div className="flex items-center">
            <i className="icofont-signal text-[#26C976] mr-1"></i>
            <span>{val.schedule}</span>
          </div>
        </div>

        {/* Course Footer */}
        <div className="flex justify-between items-center mt-5">
          <div className="text-sm text-gray-600">
            <Link to="/team-single" className="font-medium">
              <h3>Free</h3>
            </Link>
          </div>
          <div className="text-sm text-[#26C976] font-semibold">
            <Link
              to=""
              onClick={() => handleCourseView(val)}
              className="flex items-center space-x-2"
            >
              <span>{val.btnText}</span>
              <i className="icofont-external-link"></i>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;
