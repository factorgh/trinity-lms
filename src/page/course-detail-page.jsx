/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable jsx-a11y/alt-text */
import React, { useContext, useState } from "react";
import toast from "react-hot-toast";
import {
  MdArrowDropDown,
  MdLanguage,
  MdOutlineSportsGymnastics,
  MdPlayCircle,
  MdStar,
} from "react-icons/md";
import { useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../common/context/auth-context";
import { enrollStudentToCourseService } from "../common/services";
import Footer2 from "../component/layout/footer-2";
import Header from "../component/layout/header";

const CourseDetailPage = () => {
  const { auth } = useContext(AuthContext);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { state } = useLocation();
  const course = state?.courseDetails;

  const handleEnrollCourse = async () => {
    try {
      setLoading(true);

      // Attempt to enroll student
      const data = await enrollStudentToCourseService(
        auth.user._id,
        course._id
      );
      console.log(data);

      // Navigate and show success message
      navigate("/course-view", { state: { course } });
      toast.success(`${course?.title} Enrolled Successfully`);
    } catch (error) {
      console.error("Enrollment failed:", error);

      // Handle different types of errors
      if (error.response) {
        toast.error(
          error.response.data.message || "Failed to enroll in the course"
        );
      } else {
        toast.error("An unexpected error occurred. Please try again.");
      }
    } finally {
      setLoading(false); // Ensure loading state is reset
    }
  };

  return (
    <div>
      <Header />
      <div className="banner-section style-1"></div>
      {/* Left Section */}
      <div className="container mx-auto my-10 grid grid-cols-1 md:grid-cols-2 md:gap-10 gap-5 p-3">
        <div>
          {" "}
          <h3 className="text-4xl font-bold">{course?.title}</h3>
          <p className="text-[15px] mt-3">{course?.description}</p>
          <p className="text-sm mt-3">
            {course?.students.length} Enrolled students
          </p>
          {/* Course Strurture section */}
          <div className="mt-10">
            <h3 className="text-2xl font-bold mb-3">Course Structure </h3>
            {/* structure */}
            <div className=" border border-gray-300 rounded">
              <h4 className="text-lg font-semibold p-2 border border-gray-300 flex items-center gap-3">
                <MdArrowDropDown /> <span>{course?.title}</span>
              </h4>
              <div className="p-2">
                {course?.curriculum?.map((item) => (
                  <div className="flex items-center gap-3" key={item?.id}>
                    <MdPlayCircle />
                    <span>{item?.title}</span>
                  </div>
                ))}
              </div>
              {/* end of structure */}
            </div>
            <div className="mt-6  p-2">
              <h4 className="text-xl font-semibold  flex items-center gap-3 ">
                Course Description
              </h4>
              <p className="text-[15px]">{course?.description}</p>
            </div>
          </div>
        </div>
        {/* Accordian  */}
        {/*Right colum  */}
        <div className="flex  flex-col items-center ">
          <div className="flex flex-col  justify-start  border border-gray-300 shadow-md w-[400px] mt-6 ">
            <img src={course?.image} alt="Course image" className="h-[300px]" />
            <div>
              <div className="text-sm mt-3 py-3 px-5 flex gap-3  items-center">
                <span className="flex gap-2 items-center">
                  {" "}
                  <MdLanguage /> {course.primaryLanguage} |{" "}
                </span>
                <span className="flex gap-2 items-center">
                  <MdOutlineSportsGymnastics /> {course.level} |
                </span>
                <span className="flex gap-2 items-center">
                  <MdStar /> {3}
                </span>
              </div>
              <div className="flex items-center justify-center">
                <button
                  onClick={handleEnrollCourse}
                  className="w-[80%] bg-[#26C976] text-white py-2 mx-3 rounded-md mb-3 hover:bg-green-600"
                >
                  {" "}
                  <span>{loading ? "Loading..." : "Enroll Now"}</span>
                </button>
              </div>
              {/* Course info */}
              <div className="mt-6">
                <p className="px-3 font-semibold"> What's in the course?</p>
                <ul className="list-disc list-inside p-3">
                  <li> Lifetime access with free updates.</li>
                  <li> Step-by-step, hands-on project guidance.</li>
                  <li>Downloadable resources and source code.</li>
                  <li> Quizzes to test your knowledge.</li>
                  <li> Certificate of completion.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer2 />
    </div>
  );
};

export default CourseDetailPage;
