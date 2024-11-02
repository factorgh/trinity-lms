import { Fragment, useContext, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { StudentContext } from "../common/context/student-context";
import { fetchStudentViewCourseListService } from "../common/services";
import Footer from "../component/layout/footer";
import Header from "../component/layout/header";
import PageHeader from "../component/layout/pageheader";
import GroupSelect from "../component/sidebar/group-select";
import Pagination from "../component/sidebar/pagination";
import Rating from "../component/sidebar/rating";
import SkillSelect from "../component/sidebar/skill-select";

const CoursePage = () => {
  const { studentViewCoursesList, setStudentViewCoursesList } =
    useContext(StudentContext);

  console.log("studentViewCoursesList", studentViewCoursesList);
  //   const { auth } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleCourseView = (courseDetails) => {
    navigate("/course-view", { state: { courseDetails } });
  };

  async function fetchAllStudentViewCourses() {
    const response = await fetchStudentViewCourseListService();
    if (response?.success) setStudentViewCoursesList(response?.data);
  }

  useEffect(() => {
    fetchAllStudentViewCourses();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Fragment>
      <Header />
      <PageHeader title={"Archives: Courses"} curPage={"Course Page"} />
      <GroupSelect />
      <div className="course-section padding-tb section-bg">
        <div className="container">
          <div className="section-wrapper">
            <div className="course-showing-part">
              <div className="d-flex flex-wrap align-items-center justify-content-between">
                <div className="course-showing-part-left">
                  <p>
                    Showing 1-{studentViewCoursesList.length} of{" "}
                    {studentViewCoursesList.length} results
                  </p>
                </div>
                <div className="course-showing-part-right d-flex flex-wrap align-items-center">
                  <span>Sort by :</span>
                  <div className="select-item">
                    <SkillSelect select={"all"} />
                    <div className="select-icon">
                      <i className="icofont-rounded-down"></i>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row g-4 justify-content-center row-cols-xl-3 row-cols-md-2 row-cols-1">
              {studentViewCoursesList.map((val, i) => (
                <div className="col" key={i}>
                  <div
                    onClick={() => handleCourseView(val)}
                    className="course-item"
                  >
                    <div className="course-inner">
                      <div className="course-thumb">
                        <img src={`${val.image}`} alt={`${val.category}`} />
                      </div>
                      <div className="course-content">
                        <div className="course-price text-sm"></div>
                        <div className="course-category">
                          <div className="bg-yellow-300 rounded-md p-1 mr-3">
                            <a href="#">{val.category}</a>
                          </div>
                          <div className="course-reiew">
                            <Rating />
                            <span className="ratting-count">
                              {" "}
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
                            <Link to="/course-view" className="lab-btn-text">
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
            <Pagination />
          </div>
        </div>
      </div>
      <Footer />
    </Fragment>
  );
};

export default CoursePage;
