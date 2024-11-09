import { Spin } from "antd";
import "antd/dist/reset.css";
import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "swiper/css";
import "swiper/css/navigation";
// import { Navigation } from "swiper/modules";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css"; // Import Swiper styles
import CourseCard from "../../common/components/ui/course-card";
import { StudentContext } from "../../common/context/student-context";
import { fetchStudentViewCourseListService } from "../../common/services";

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
    navigate("/course-view", { state: { courseDetails } });
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
            <Spin size="large" />
          </div>
        ) : (
          <div className="p-4 my-10">
            {/* Swiper Component for Courses */}
            <Swiper
              navigation={true}
              pagination={true}
              // modules={[Navigation]}
              spaceBetween={20}
              slidesPerView={1}
              autoplay={{ delay: 1000, disableOnInteraction: false }}
              breakpoints={{
                320: {
                  slidesPerView: 1, // On small screens, show 1 course at a time
                },
                768: {
                  slidesPerView: 2, // On medium screens, show 2 courses at a time
                },
                1024: {
                  slidesPerView: 3, // On large screens, show 3 courses at a time
                },
              }}
              loop={true} // Enable looping of courses
              // pagination={{
              //   clickable: true,
              //   type: "bullets",
              //   renderBullet: function (index, className) {
              //     return (
              //       '<span class="' + className + '">' + (index + 1) + "</span>"
              //     );
              //   },
              // }}
              // navigation={{
              //   nextEl: ".swiper-button-next",
              //   prevEl: ".swiper-button-prev",
              // }} // Enable navigation arrows
              className="md:mx-10" // Optional: Add custom class for further styling
            >
              {studentViewCoursesList.map((val, i) => (
                <SwiperSlide className="py-3" key={i}>
                  <CourseCard
                    val={val}
                    handleCourseView={handleCourseView}
                    i={i}
                  />
                </SwiperSlide>
              ))}
            </Swiper>

            {/* Custom Pagination and Navigation Controls */}
            <div className="swiper-pagination mt-4 flex justify-center "></div>

            {/* Add navigation buttons */}
            {/* <div className="swiper-button-next"></div>
            <div className="swiper-button-prev"></div> */}
          </div>
        )}
      </div>
    </div>
  );
};

export default Course;
