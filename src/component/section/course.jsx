import { Spin } from "antd";
import { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { StudentContext } from "../../common/context/student-context";
import { fetchStudentViewCourseListService } from "../../common/services";
import Rating from "../sidebar/rating";

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

  // Handle course view here

  useEffect(() => {
    fetchAllStudentViewCourses();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleCourseView = (courseDetails) => {
    navigate("/course-view", { state: { courseDetails } });
  };

  return (
    <div className="course-section padding-tb section-bg">
      <div className="container">
        <div className="section-header text-center">
          <span className="subtitle">{subTitle}</span>
          <h2 className="title">{title}</h2>
        </div>

        {/* Centered Loading Spinner */}
        {loading ? (
          <div className="flex justify-center items-center h-20">
            <Spin size="large" />
          </div>
        ) : (
          <div className="section-wrapper">
            <div className="row g-4 justify-content-center row-cols-xl-3 row-cols-md-2 row-cols-1">
              {studentViewCoursesList.map((val, i) => (
                <div
                  onClick={() => handleCourseView(val)}
                  className="col"
                  key={i}
                >
                  <div className="course-item">
                    <div className="course-inner">
                      <div className="course-thumb">
                        <img src={`${val.image}`} alt={`${val.category}`} />
                      </div>
                      <div className="course-content">
                        <div className="course-price"></div>
                        <div className="course-category">
                          <div className="bg-yellow-300 rounded-md p-1 mr-3">
                            <a href="#">{val.category}</a>
                          </div>
                          <div className="course-reiew">
                            <Rating />
                            <span className="ratting-count">
                              {val.reviewCount}
                            </span>
                          </div>
                        </div>
                        <Link to="/course-single">
                          <h4>{val.title}</h4>
                        </Link>
                        <div className="course-details">
                          <div className="couse-count">
                            <i className="icofont-video-alt"></i>{" "}
                            {val.totalLeson}
                          </div>
                          <div className="couse-topic">
                            <i className="icofont-signal"></i> {val.schdule}
                          </div>
                        </div>
                        <div className="course-footer">
                          <div className="course-author">
                            <Link to="/team-single" className="ca-name">
                              <h3> Free</h3>
                            </Link>
                          </div>
                          <div className="course-btn">
                            <Link
                              to=""
                              onClick={() => handleCourseView(val)}
                              className="lab-btn-text"
                            >
                              {val.btnText}{" "}
                              <i className="icofont-external-link"></i>
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Course;
