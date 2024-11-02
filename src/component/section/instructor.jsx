import { Link } from "react-router-dom";
import instructorImg1 from "../../../src/assets/images/instructor1.png";
import instructorImg2 from "../../../src/assets/images/instructor2.jpg";
import instructorImg3 from "../../../src/assets/images/instructor3.png";
import instructorImg4 from "../../../src/assets/images/instructor4.jpg";
import Rating from "../sidebar/rating";

const subTitle = "World-class Instructors";
const title = "Classes Taught By Real Creators";

const instructorList = [
  {
    imgUrl: instructorImg1,
    imgAlt: "instructor Emilee Logan",
    name: "Emilee Logan",
    degi: "Master of Education Degree",
    courseCount: "08 courses",
    studentAnroll: "30 students",
    skills: ["JavaScript", "React", "Node.js"], // Technical info
  },
  {
    imgUrl: instructorImg2,
    imgAlt: "instructor Donald Logan",
    name: "Donald Logan",
    degi: "Master of Education Degree",
    courseCount: "08 courses",
    studentAnroll: "30 students",
    skills: ["Python", "Django", "Machine Learning"], // Technical info
  },
  {
    imgUrl: instructorImg3,
    imgAlt: "instructor Oliver Porter",
    name: "Oliver Porter",
    degi: "Master of Education Degree",
    courseCount: "08 courses",
    studentAnroll: "30 students",
    skills: ["UI/UX Design", "Photoshop", "Figma"], // Technical info
  },
  {
    imgUrl: instructorImg4,
    imgAlt: "instructor Nahla Jones",
    name: "Nahla Jones",
    degi: "Master of Education Degree",
    courseCount: "08 courses",
    studentAnroll: "30 students",
    skills: ["Java", "Spring Boot", "Microservices"], // Technical info
  },
];

const Instructor = () => {
  return (
    <div className="instructor-section padding-tb section-bg">
      <div className="container">
        <div className="section-header text-center">
          <span className="subtitle">{subTitle}</span>
          <h2 className="title">{title}</h2>
        </div>
        <div className="section-wrapper">
          <div className="row g-4 justify-content-center row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-4">
            {instructorList.map((val, i) => (
              <div className="col" key={i}>
                <div className="instructor-item">
                  <div className="instructor-inner">
                    <div className="instructor-thumb">
                      <img src={val.imgUrl} alt={val.imgAlt} />
                    </div>
                    <div className="instructor-content">
                      <Link to="/team-single">
                        <h4>{val.name}</h4>
                      </Link>
                      <p>{val.degi}</p>
                      <Rating />

                      {/* Render the technical skills */}
                      <ul className="skills-list">
                        {val.skills.map((skill, index) => (
                          <li key={index}>{skill}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  <div className="instructor-footer">
                    <ul className="lab-ul d-flex flex-wrap justify-content-between align-items-center">
                      <li>
                        <i className="icofont-book-alt"></i> {val.courseCount}
                      </li>
                      <li>
                        <i className="icofont-users-alt-3"></i>{" "}
                        {val.studentAnroll}
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center footer-btn">
            <p>
              Want to help people learn, grow and achieve more in life?
              <Link to="/team">Become an instructor</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Instructor;
