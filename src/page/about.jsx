import { Fragment } from "react";
import Footer2 from "../component/layout/footer-2";
import Header from "../component/layout/header";
import AchievementTwo from "../component/section/achievement-2";
import Instructor from "../component/section/instructor";
import Skill from "../component/section/skill";
import Student from "../component/section/student";

import intstructorImg from "../../src/assets/images/instructor.jpeg";
import instImg from "../../src/assets/images/student3.jpeg";

const subTitle = "About Our Edukon";
const title = "Good Qualification Services And Better Skills";
const desc =
  "Distinctively provide acces mutfuncto users whereas transparent proceses somes ncentivize eficient functionalities rather than extensible archtectur communicate leveraged services and cross-platform.";

const year = "5+";
const expareance = "Years Of Experiences";

const aboutList = [
  {
    imgUrl: "assets/images/about/icon/01.jpg",
    imgAlt: "about icon rajibraj91 rajibraj",
    title: "Skilled Instructors",
    desc: "Distinctively provide acces mutfuncto users whereas communicate leveraged services",
  },
  {
    imgUrl: "assets/images/about/icon/02.jpg",
    imgAlt: "about icon rajibraj91 rajibraj",
    title: "Get Certificate",
    desc: "Distinctively provide acces mutfuncto users whereas communicate leveraged services",
  },
  {
    imgUrl: "assets/images/about/icon/03.jpg",
    imgAlt: "about icon rajibraj91 rajibraj",
    title: "Online Classes",
    desc: "Distinctively provide acces mutfuncto users whereas communicate leveraged services",
  },
];

const AboutPage = () => {
  return (
    <Fragment>
      <Header />
      <div className="banner-section style"></div>
      <div className="about-section style-3 padding-tb section-bg">
        <div className="container">
          <div className="row justify-content-center row-cols-xl-2 row-cols-1 align-items-center">
            <div className="col">
              <div className="about-left">
                <div className="about-thumb">
                  {/* Hide this image on sm and md screens */}
                  <img
                    className="img-fluid hidden sm:block md:block lg:block"
                    style={{ maxWidth: "400px", height: "auto" }}
                    src={intstructorImg}
                    alt="Instructor"
                  />
                </div>
                <div className="abs-thumb">
                  <img
                    className="sm:hidden md:hidden lg:block"
                    src={instImg}
                    alt="Student"
                  />
                </div>
                <div
                  style={{ backgroundColor: "#26C976" }}
                  className="about-left-content"
                >
                  <h3>{year}</h3>
                  <p>{expareance}</p>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="about-right">
                <div className="section-header">
                  <span className="subtitle">{subTitle}</span>
                  <h2 className="title">{title}</h2>
                  <p style={{ fontSize: "15px" }} className="text-sm">
                    {desc}
                  </p>
                </div>
                <div className="section-wrapper">
                  <ul className="lab-ul">
                    {aboutList.map((val, i) => (
                      <li key={i}>
                        <div className="sr-left">
                          <img src={`${val.imgUrl}`} alt={`${val.imgAlt}`} />
                        </div>
                        <div className="sr-right">
                          <h5>{val.title}</h5>
                          <p>{val.desc}</p>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Student />
      <Instructor />
      <AchievementTwo />
      <Skill />
      <Footer2 />
    </Fragment>
  );
};

export default AboutPage;
