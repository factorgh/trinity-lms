import { Divider, Spin } from "antd";
import { Fragment, useContext, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import CourseItem from "../common/components/ui/course-item";
import { StudentContext } from "../common/context/student-context";
import { fetchStudentViewCourseListService } from "../common/services";
import Footer2 from "../component/layout/footer-2";
import Header from "../component/layout/header";
import ScrollToTop from "../component/layout/ScrollToTop";

const CoursePage = () => {
  const { studentViewCoursesList, setStudentViewCoursesList } =
    useContext(StudentContext);
  const [loading, setLoading] = useState(true);
  const [input, setInput] = useState("");
  const [filteredCourses, setFilteredCourses] = useState([]);
  const [showSearch, setShowSearch] = useState(false); // New state to control search form visibility
  const location = useLocation();
  const { searchTerm } = location.state || {};
  console.log(searchTerm);
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchAllStudentViewCourses() {
      setLoading(true);
      const response = await fetchStudentViewCourseListService();
      if (response?.success) {
        setStudentViewCoursesList(response?.data);
      }
      setLoading(false);
    }
    fetchAllStudentViewCourses();
  }, [setStudentViewCoursesList]);

  useEffect(() => {
    setInput(searchTerm || "");
  }, [searchTerm]);

  const handleSearch = (event) => {
    const value = event.target.value;
    setInput(value);

    if (studentViewCoursesList && studentViewCoursesList.length > 0) {
      const filtered = studentViewCoursesList.filter((course) =>
        course.title.toLowerCase().includes(value.toLowerCase())
      );
      setFilteredCourses(filtered);
    }
  };

  const handleCourseView = (courseDetails) => {
    navigate("/course-view", { state: { courseDetails } });
    ScrollToTop(0, 0);
  };

  useEffect(() => {
    if (studentViewCoursesList && studentViewCoursesList.length > 0) {
      setFilteredCourses(studentViewCoursesList);
    }
  }, [studentViewCoursesList]);

  useEffect(() => {
    if (studentViewCoursesList && studentViewCoursesList.length > 0) {
      const filtered = studentViewCoursesList.filter((course) =>
        course.title.toLowerCase().includes(input.toLowerCase())
      );
      setFilteredCourses(filtered);
    }
  }, [input, studentViewCoursesList]);

  return (
    <Fragment>
      <Header />
      <div className="banner-section style-1"></div>

      <div className="course-section section-bg">
        <div className="container mx-auto px-4">
          <div className="section-wrapper">
            <div className="flex items-center justify-between py-5 mb-3 md:py-3">
              <h2 className="text-3xl text-gray-800 hidden md:block">
                Course List /
              </h2>

              {/* Responsive Search Icon */}
              <div className="relative flex md:hidden">
                <button
                  className="p-2 rounded-full bg-gray-200"
                  onClick={() => setShowSearch((prev) => !prev)}
                >
                  <i className="icofont-search"></i>
                </button>
                {showSearch && (
                  <form
                    onSubmit={(e) => e.preventDefault()}
                    className="absolute -top-3 left-10 w-64 bg-white border border-gray-300 rounded-lg mt-2 z-50 p-2"
                  >
                    <input
                      className="w-full p-2 border rounded"
                      type="text"
                      value={input}
                      onChange={handleSearch}
                      placeholder="Keywords of your course"
                    />
                  </form>
                )}
              </div>

              {/* Search form visible on larger screens */}
              <form
                onSubmit={(e) => e.preventDefault()}
                className="max-w-sm w-full hidden md:flex items-center border border-gray-300 rounded-lg bg-white h-12"
              >
                <div className="banner-icon ml-2">
                  <i className="icofont-search"></i>
                </div>
                <input
                  className="p-2 border-none w-full"
                  type="text"
                  value={input}
                  onChange={handleSearch}
                  placeholder="Keywords of your course"
                />
              </form>
            </div>

            {loading ? (
              <div className="flex justify-center items-center h-40">
                <Spin size="large" />
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {filteredCourses?.map((i, val) => (
                  <CourseItem
                    key={i.id}
                    val={val}
                    i={i}
                    handleCourseView={handleCourseView}
                  />
                ))}
              </div>
            )}
            {filteredCourses.length === 0 && <p>No course found</p>}
            <Divider className="mb-12 mt-20" />
          </div>
        </div>
      </div>

      <Footer2 />
    </Fragment>
  );
};

export default CoursePage;
