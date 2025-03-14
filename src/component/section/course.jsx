import "antd/dist/reset.css";
import { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "swiper/css";
import "swiper/css/navigation";
// import { Navigation } from "swiper/modules";
import "swiper/css/pagination";
import "swiper/swiper-bundle.css"; // Import Swiper styles
import CourseItem from "../../common/components/ui/course-item";
import { StudentContext } from "../../common/context/student-context";
import { fetchStudentViewCourseListService } from "../../common/services";
import Loading from "../loading";

const subTitle = "Featured Courses";
const title = "Pick A Course To Get Started";

const Course = () => {
  const { studentViewCoursesList, setStudentViewCoursesList } =
    useContext(StudentContext);
  const [loading, setLoading] = useState(true); // Add loading state
  const navigate = useNavigate();

  async function fetchAllStudentViewCourses() {
    setLoading(true); // Set loading to true before fetching data
    const response = await fetchStudentViewCourseListService();
    if (response?.success) setStudentViewCoursesList(response?.data);
    setLoading(false); // Set loading to false after fetching data
  }

  useEffect(() => {
    fetchAllStudentViewCourses();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleCourseView = (courseDetails) => {
    navigate("/course-detail", { state: { courseDetails } });
  };

  return (
    <div className="course-section section-bg py-20 mb-5">
      <div className="w-full px-4 mx-auto">
        <div className="section-header text-center mb-10">
          <span
            style={{ color: "#26C976" }}
            className="subtitle text-lg font-semibold"
          >
            {subTitle}
          </span>
          <h2 className="title text-3xl font-bold mt-2">{title}</h2>
        </div>

        {/* Centered Loading Spinner */}
        {loading ? (
          <div className="flex justify-center items-center h-20">
            {/* <Spin size="large" /> */ <Loading />}
          </div>
        ) : (
          <div className="p-4 my-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Swiper Component for Courses */}
            {studentViewCoursesList?.slice(0, 4).map((i, val) => (
              <CourseItem
                key={i}
                val={val}
                handleCourseView={handleCourseView}
                i={i}
              />
            ))}
            {/* Custom Pagination and Navigation Controls */}
            <div className="swiper-pagination mt-4 flex justify-center "></div>

            {/* Add navigation buttons */}
            {/* <div className="swiper-button-next"></div>
            <div className="swiper-button-prev"></div> */}
          </div>
        )}
      </div>
      {/*  */}
      <div className="text-center mt-6">
        <Link
          style={{ backgroundColor: "#26C976", color: "#FFFFFF" }}
          to="/course"
          className="lab-btn px-6 py-3 text-lg font-semibold rounded-md"
        >
          <span>Show All Courses</span>
        </Link>
      </div>
      {/*  */}
    </div>
  );
};

export default Course;
