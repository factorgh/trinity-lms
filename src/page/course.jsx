import { Collapse, Divider, Spin } from "antd"; // Import Spin from Ant Design
import { Fragment, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import CourseItem from "../common/components/ui/course-item";
import { StudentContext } from "../common/context/student-context";
import { fetchStudentViewCourseListService } from "../common/services";
import Footer2 from "../component/layout/footer-2";
import Header from "../component/layout/header";
import BannerFour from "../component/section/banner-4";
import CourseSortSelect from "../component/sidebar/skill-select";

// New professional course page with FAQ and course details
const { Panel } = Collapse; // Import Collapse Panel from Ant Design

const CoursePage = () => {
  const { studentViewCoursesList, setStudentViewCoursesList } =
    useContext(StudentContext);
  const [loading, setLoading] = useState(true); // Step 1: Loading state for async operations
  const navigate = useNavigate();

  const handleCourseView = (courseDetails) => {
    navigate("/course-view", { state: { courseDetails } });
  };

  async function fetchAllStudentViewCourses() {
    setLoading(true); // Step 2: Set loading state to true before fetching data
    const response = await fetchStudentViewCourseListService();
    if (response?.success) {
      setStudentViewCoursesList(response?.data);
    }
    setLoading(false); // Step 2: Set loading state to false after fetching
  }

  useEffect(() => {
    fetchAllStudentViewCourses();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const subTitle = "All Courses";
  const title = "Browse All Courses";

  return (
    <Fragment>
      <Header />
      {/* Hero Banner Section */}
      <BannerFour />

      <div className="course-section padding-tb section-bg">
        <div className="container mx-auto px-4">
          <div className="section-wrapper">
            <>
              <div className="course-showing-part mb-10">
                <div className="section-header text-center mb-10">
                  <span
                    style={{ color: "#26C976" }}
                    className="subtitle text-lg font-semibold"
                  >
                    {subTitle}
                  </span>
                  <h2 className="title text-3xl font-bold mt-2">{title}</h2>
                </div>
                <div className="d-flex flex-wrap align-items-center justify-content-between mb-6">
                  <div className="course-showing-part-left">
                    {/* <p className="text-sm">
                      Showing 1-{studentViewCoursesList.length} of{" "}
                      {studentViewCoursesList.length} results
                    </p> */}
                  </div>
                  <div className="course-showing-part-right d-flex flex-wrap align-items-center">
                    <span className="mr-2 text-sm">Sort by:</span>
                    <div className="select-item">
                      <CourseSortSelect />
                      <div className="select-icon">
                        <i className="icofont-rounded-down"></i>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Show the loading spinner while data is being fetched */}
              {loading ? (
                <div className="flex justify-center items-center h-40">
                  <Spin size="large" /> {/* Ant Design Spinner */}
                </div>
              ) : (
                // Grid of Courses: Show once data is loaded
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                  {studentViewCoursesList.map((i, val) => (
                    <CourseItem
                      key={i}
                      val={val}
                      i={i}
                      handleCourseView={handleCourseView}
                    />
                  ))}
                </div>
              )}

              {/* Divider after Courses */}
              <Divider className="my-12" />

              {/* FAQ Section */}
              <div className="faq-section my-16 px-4 md:px-10">
                <h3 className="text-2xl font-semibold mb-6">
                  Frequently Asked Questions
                </h3>
                <Collapse
                  defaultActiveKey={["1"]}
                  expandIconPosition="right"
                  className="shadow-lg rounded-lg"
                >
                  <Panel header="What is the course duration?" key="1">
                    <p className="text-gray-600">
                      The course duration varies depending on the course. Most
                      courses range between 4-8 weeks.
                    </p>
                  </Panel>
                  <Panel
                    header="Do I need any prior knowledge to take the course?"
                    key="2"
                  >
                    <p className="text-gray-600 text-sm">
                      Some courses require a basic understanding of the subject,
                      but most are suitable for beginners.
                    </p>
                  </Panel>
                  <Panel header="Will I get a certificate?" key="3">
                    <p className="text-gray-600 text-sm">
                      Yes! Upon completing the course, you'll receive a
                      certificate that you can share with others.
                    </p>
                  </Panel>
                  <Panel header="How can I enroll?" key="4">
                    <p className="text-gray-600 text-sm">
                      Simply select a course and click "Enroll Now." Follow the
                      prompts to complete your enrollment.
                    </p>
                  </Panel>
                </Collapse>
              </div>

              {/* Course Details Section */}
            </>
          </div>
        </div>
      </div>

      {/* Footer Section */}
      <Footer2 />
    </Fragment>
  );
};

export default CoursePage;
