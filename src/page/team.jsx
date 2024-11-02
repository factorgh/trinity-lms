import { Fragment } from "react";
import { Link } from "react-router-dom";
import instructorImg1 from "../../src/assets/images/instructor1.png";
import instructorImg2 from "../../src/assets/images/instructor2.jpg";
import instructorImg3 from "../../src/assets/images/instructor3.png";
import instructorImg4 from "../../src/assets/images/instructor4.jpg";
import Footer from "../component/layout/footer";
import Header from "../component/layout/header";
import PageHeader from "../component/layout/pageheader";
import Rating from "../component/sidebar/rating";

const instructorList = [
  {
    imgUrl: instructorImg1,
    imgAlt: "instructor Emilee Logan",
    name: "Emilee Logan",
    degi: "Master of Computer Science",
    courseCount: "08 courses",
    studentAnroll: "30 students",
    skills: ["JavaScript", "React", "Node.js"], // Technical info
  },
  {
    imgUrl: instructorImg2,
    imgAlt: "instructor Donald Logan",
    name: "Donald Logan",
    degi: "Master of Data Systems",
    courseCount: "08 courses",
    studentAnroll: "30 students",
    skills: ["Python", "Django", "Machine Learning"], // Technical info
  },
  {
    imgUrl: instructorImg3,
    imgAlt: "instructor Oliver Porter",
    name: "Oliver Porter",
    degi: "Master of Info Systems",
    courseCount: "08 courses",
    studentAnroll: "30 students",
    skills: ["UI/UX Design", "Photoshop", "Figma"], // Technical info
  },
  {
    imgUrl: instructorImg4,
    imgAlt: "instructor Nahla Jones",
    name: "Nahla Jones",
    degi: "Master of MicroServices",
    courseCount: "08 courses",
    studentAnroll: "30 students",
    skills: ["Java", "Spring Boot", "Microservices"], // Technical info
  },
];

const achieveList = [
  {
    imgUrl: instructorImg1,
    imgAlt: "Achievement: Start Teaching Today",
    title: "Start Teaching Today",
    desc: "Seamlessly engage technically sound, collaborative, goal-oriented content rather than ethically.",
    btnText: "Become An Instructor",
    siteLink: "#",
  },
  {
    imgUrl: instructorImg2,
    imgAlt: "Achievement: Join Our Course",
    title: "If You Join Our Course",
    desc: "Seamlessly engage technically sound, collaborative, goal-oriented content rather than ethically.",
    btnText: "Register For Free",
    siteLink: "#",
  },
];

const TeamPage = () => {
  return (
    <Fragment>
      <Header />
      <PageHeader title={"All Team Members"} curPage={"Team"} />
      <div className="instructor-section padding-tb section-bg">
        <div className="container">
          <div className="section-wrapper">
            <div className="row g-4 justify-content-center row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4">
              {instructorList.map((instructor) => (
                <div className="col" key={instructor.id}>
                  <div className="instructor-item">
                    <div className="instructor-inner">
                      <div className="instructor-thumb">
                        <img src={instructor.imgUrl} alt={instructor.imgAlt} />
                      </div>
                      <div className="instructor-content">
                        <Link to={`/team-single/${instructor.id}`}>
                          <h4>{instructor.name}</h4>
                        </Link>
                        <p>{instructor.degi}</p>
                        <Rating />
                      </div>
                    </div>
                    <div className="instructor-footer">
                      <ul className="lab-ul d-flex flex-wrap justify-content-between align-items-center">
                        <li>
                          <span className="icon">
                            <i className="icofont-book-alt"></i>
                          </span>
                          {instructor.courseCount}
                        </li>
                        <li>
                          <span className="icon">
                            <i className="icofont-users-alt-3"></i>
                          </span>
                          {instructor.studentAnroll}
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="achieve-part mt-5">
              <div className="row g-4 row-cols-1 row-cols-lg-2">
                {achieveList.map((achievement, index) => (
                  <div className="col" key={index}>
                    <div className="achieve-item">
                      <div className="achieve-inner">
                        <div className="w-40 h-40 rounded-full">
                          <img
                            src={achievement.imgUrl}
                            alt={achievement.imgAlt}
                          />
                        </div>
                        <div className="achieve-content">
                          <h4>{achievement.title}</h4>
                          <p>{achievement.desc}</p>
                          <a href={achievement.siteLink} className="lab-btn">
                            <span>{achievement.btnText}</span>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </Fragment>
  );
};

export default TeamPage;
