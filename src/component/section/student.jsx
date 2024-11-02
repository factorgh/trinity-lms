import { Link } from "react-router-dom";
import specialImg from "../../../src/assets/images/special.jpg";
import student2 from "../../../src/assets/images/student2.jpeg";
import student1 from "../../../src/assets/images/student4.jpeg";
import Rating from "../sidebar/rating";

const subTitle = "Loved by 200,000+ students";
const title = "Students Community Feedback";

const studentList = [
  {
    imgUrl: student1,
    imgAlt: "student rajibraj91 rajibraj",
    name: "Oliver Beddows",
    degi: "UX designer",
    desc: "Rapidiously buildcollaboration anden deas sharing viaing and bleedng edgeing nterfaces fnergstcally plagiarize teams anbuilding paradgms whereas goingi forward process and monetze",
  },
  {
    imgUrl: student2,
    imgAlt: "student rajibraj91 rajibraj",
    name: "Madley Pondor",
    degi: "UX designer",
    desc: "Rapidiously buildcollaboration anden deas sharing viaing and bleedng edgeing nterfaces fnergstcally plagiarize teams anbuilding paradgms whereas goingi forward process and monetze",
  },
];

const Student = () => {
  return (
    <div className="student-feedbak-section padding-tb shape-img">
      <div className="container">
        <div className="section-header text-center">
          <span style={{ color: "#26C976" }} className="subtitle">
            {subTitle}
          </span>
          <h2 className="title">{title}</h2>
        </div>
        <div className="section-wrapper">
          <div className="row justify-content-center row-cols-lg-2 row-cols-1">
            <div className="col">
              <div className="sf-left">
                <div className="sfl-thumb">
                  <img src={specialImg} alt="student feedback" />
                  <a
                    href="/"
                    className="video-button popup"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <i
                      style={{ color: "#26C976" }}
                      className="icofont-ui-play"
                    ></i>
                  </a>
                </div>
              </div>
            </div>
            <div className="col">
              {studentList.map((val, i) => (
                <div className="stu-feed-item" key={i}>
                  <div className="stu-feed-inner">
                    <div className="stu-feed-top">
                      <div className="sft-left">
                        <div className="sftl-thumb">
                          <img src={`${val.imgUrl}`} alt={val.imgAlt} />
                        </div>
                        <div className="sftl-content">
                          <Link to="/team-single">
                            <h6>{val.name}</h6>
                          </Link>
                          <span>{val.degi}</span>
                        </div>
                      </div>
                      <div className="sft-right">
                        <Rating />
                      </div>
                    </div>
                    <div className="stu-feed-bottom">
                      <p>{val.desc}</p>
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

export default Student;
