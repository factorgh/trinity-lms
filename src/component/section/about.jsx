import myImage from "../../assets/images/final.png";

const subTitle = "About Our Edukon";
//
const desc =
  "We provide high-quality learning experiences and professional training to help individuals and organizations grow. Our platform offers seamless access to expert-led courses, ensuring an efficient and engaging learning process";

const aboutList = [
  {
    imgUrl: "assets/images/about/icon/01.jpg",
    imgAlt: "about icon rajibraj91 rajibraj",
    title: "Skilled Instructors",
    desc: "Learn from experienced educators and industry professionals dedicated to your success.",
  },
  {
    imgUrl: "assets/images/about/icon/02.jpg",
    imgAlt: "about icon rajibraj91 rajibraj",
    title: "Certified Courses",
    desc: "Earn recognized certificates that enhance your career opportunities and professional growth.",
  },
  {
    imgUrl: "assets/images/about/icon/03.jpg",
    imgAlt: "about icon rajibraj91 rajibraj",
    title: "Flexible Online Learning",
    desc: "Access courses anytime, anywhere, with interactive and user-friendly digital resources.",
  },
];

const About = () => {
  return (
    <div className="about-section">
      <div className="container">
        <div className="row justify-content-center row-cols-xl-2 row-cols-1 align-items-end flex-row-reverse">
          {/* Right Section */}
          <div className="col">
            <div className="about-right padding-tb">
              <div className="section-header">
                <span style={{ color: "#26C976" }} className="subtitle">
                  {subTitle}
                </span>

                <p>{desc}</p>
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

          {/* Left Section with Image */}
          <div className="col">
            <div className="about-left">
              <div className="about-thumb">
                {/* Hide image on small screens */}
                <img
                  className="img-fluid d-none d-lg-block"
                  src={myImage}
                  alt="about"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
