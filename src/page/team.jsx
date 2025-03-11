import { Fragment } from "react";
import instructorImg1 from "../../src/assets/images/instructor1.png";
import instructorImg2 from "../../src/assets/images/instructor2.jpeg";

import Footer2 from "../component/layout/footer-2";
import Header from "../component/layout/header";
import Instructor from "../component/section/instructor";

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

      <div className="instructor-section padding-tb section-bg">
        <div className="container">
          <div className="section-wrapper">
            {/* <div className="row g-4 justify-content-center row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4">
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
            </div> */}

            <Instructor />
            {/* <div className="achieve-part mt-5">
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
            </div> */}
          </div>
        </div>
      </div>
      <Footer2 />
    </Fragment>
  );
};

export default TeamPage;
