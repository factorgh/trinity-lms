import CountUp from "react-countup";
import instructorImg1 from "../../../src/assets/images/instructor1.png";
import instructorImg2 from "../../../src/assets/images/instructor2.jpg";

const subTitle = "START TO SUCCESS";
const title = "Achieve Your Goals With Edukon";

const achievementList = [
  {
    count: "30",
    desc: "Years of Language Education Experience",
  },
  {
    count: "3084",
    desc: "Learners Enrolled in Edukon Courses",
  },
  {
    count: "330",
    desc: "Qualified Teachers And Language Experts",
  },
  {
    count: "2300",
    desc: "Innovative Foreign Language Courses",
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

const Achievement = () => {
  return (
    <div className="achievement-section padding-tb">
      <div className="container">
        <div className="section-header text-center">
          <span style={{ color: "#26C976" }} className="subtitle">
            {subTitle}
          </span>
          <h2 className="title">{title}</h2>
        </div>
        <div className="section-wrapper">
          <div className="counter-part mb-4">
            <div className="row g-4 row-cols-lg-4 row-cols-sm-2 row-cols-1 justify-content-center">
              {achievementList.map((val, i) => (
                <div className="col" key={i}>
                  <div className="count-item">
                    <div className="count-inner">
                      <div className="count-content">
                        <h2>
                          <span className="count">
                            <CountUp end={val.count} />
                          </span>
                          <span>+</span>
                        </h2>
                        <p>{val.desc}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="achieve-part">
            <div className="row g-4 row-cols-1 row-cols-lg-2">
              {achieveList.map((val, i) => (
                <div className="col" key={i}>
                  <div className="achieve-item">
                    <div className="achieve-inner">
                      <div className="w-40 h-40 rounded-full">
                        <img src={`${val.imgUrl}`} alt={`${val.imgAlt}`} />
                      </div>
                      <div className="achieve-content">
                        <h4>{val.title}</h4>
                        <p>{val.desc}</p>
                        <a href={val.siteLink} className="lab-btn">
                          <span>{val.btnText}</span>
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
  );
};

export default Achievement;
