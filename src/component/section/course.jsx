import { useContext, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { StudentContext } from "../../common/context/student-context";
import Rating from "../sidebar/rating";

import { fetchStudentViewCourseListService } from "../../common/services";

const subTitle = "Featured Courses";
const title = "Pick A Course To Get Started";

const courseList = [
  {
    imgUrl: "assets/images/course/01.jpg",
    imgAlt: "course rajibraj91 rajibraj",
    price: "$30",
    cate: "Adobe XD",
    reviewCount: "03 reviews",
    title: "Fundamentals of Adobe XD Theory Learn New",
    totalLeson: "18x Lesson",
    schdule: "Online Class",
    authorImgUrl: "assets/images/course/author/01.jpg",
    authorImgAlt: "course author rajibraj91 rajibraj",
    authorName: "William Smith",
    btnText: "Read More",
  },
  {
    imgUrl: "assets/images/course/02.jpg",
    imgAlt: "course rajibraj91 rajibraj",
    price: "$30",
    cate: "Adobe XD",
    reviewCount: "03 reviews",
    title: "Certified Graphic Design with Free Project Course",
    totalLeson: "18x Lesson",
    schdule: "Online Class",
    authorImgUrl: "assets/images/course/author/02.jpg",
    authorImgAlt: "course author rajibraj91 rajibraj",
    authorName: "Lora Smith",
    btnText: "Read More",
  },
  {
    imgUrl: "assets/images/course/03.jpg",
    imgAlt: "course rajibraj91 rajibraj",
    price: "$30",
    cate: "Adobe XD",
    reviewCount: "03 reviews",
    title: "Theory Learn New Student And Fundamentals",
    totalLeson: "18x Lesson",
    schdule: "Online Class",
    authorImgUrl: "assets/images/course/author/03.jpg",
    authorImgAlt: "course author rajibraj91 rajibraj",
    authorName: "Robot Smith",
    btnText: "Read More",
  },
  {
    imgUrl: "assets/images/course/04.jpg",
    imgAlt: "course rajibraj91 rajibraj",
    price: "$30",
    cate: "Adobe XD",
    reviewCount: "03 reviews",
    title: "Computer Fundamentals Basic Startup Ultricies Vitae",
    totalLeson: "18x Lesson",
    schdule: "Online Class",
    authorImgUrl: "assets/images/course/author/04.jpg",
    authorImgAlt: "course author rajibraj91 rajibraj",
    authorName: "Zinat Zaara",
    btnText: "Read More",
  },
  {
    imgUrl: "assets/images/course/05.jpg",
    imgAlt: "course rajibraj91 rajibraj",
    price: "$30",
    cate: "Adobe XD",
    reviewCount: "03 reviews",
    title: "Boozy Halloween Drinks for the Grown Eleifend Kuismod",
    totalLeson: "18x Lesson",
    schdule: "Online Class",
    authorImgUrl: "assets/images/course/author/05.jpg",
    authorImgAlt: "course author rajibraj91 rajibraj",
    authorName: "Rajib Raj",
    btnText: "Read More",
  },
  {
    imgUrl: "assets/images/course/06.jpg",
    imgAlt: "course rajibraj91 rajibraj",
    price: "$30",
    cate: "Adobe XD",
    reviewCount: "03 reviews",
    title: "Student Want to Learn About Science And Arts",
    totalLeson: "18x Lesson",
    schdule: "Online Class",
    authorImgUrl: "assets/images/course/author/06.jpg",
    authorImgAlt: "course author rajibraj91 rajibraj",
    authorName: "Angel Mili",
    btnText: "Read More",
  },
];

const Course = () => {
  const { studentViewCoursesList, setStudentViewCoursesList } =
    useContext(StudentContext);

  console.log("studentViewCoursesList", studentViewCoursesList);
  //   const { auth } = useContext(AuthContext);
  const navigate = useNavigate();

  async function fetchAllStudentViewCourses() {
    const response = await fetchStudentViewCourseListService();
    if (response?.success) setStudentViewCoursesList(response?.data);
  }

  useEffect(() => {
    fetchAllStudentViewCourses();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="course-section padding-tb section-bg">
      <div className="container">
        <div className="section-header text-center">
          <span className="subtitle">{subTitle}</span>
          <h2 className="title">{title}</h2>
        </div>
        <div className="section-wrapper">
          <div className="row g-4 justify-content-center row-cols-xl-3 row-cols-md-2 row-cols-1">
            {studentViewCoursesList.map((val, i) => (
              <div className="col" key={i}>
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
                          <i className="icofont-video-alt"></i> {val.totalLeson}
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
                          <Link to="/course-single" className="lab-btn-text">
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
      </div>
    </div>
  );
};

export default Course;
