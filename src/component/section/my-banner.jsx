import { useState } from "react";
import { useNavigate } from "react-router-dom";
import myImage from "../../assets/images/final.png";

const subTitle = "Online education";
const title = (
  <h2 className="title">
    <span className="d-lg-block">Empowering </span>
    <span className="d-lg-block"> Next Generation of Innovators</span>
  </h2>
);

const desc =
  "Welcome to Ghana’s premier e-learning platform, dedicated to empowering one million young Ghanaians with essential digital skills. Join a growing community of innovators and start your journey in technology today.";

// “Empowering Ghana’s Next Generation of Innovators”
// “Learn Coding, AI, Robotics & More - Right Here, For Free!”

// const catagoryList = [
//   {
//     name: "Figma",
//     link: "#",
//   },
//   {
//     name: "Adobe XD",
//     link: "#",
//   },
//   {
//     name: "illustration",
//     link: "#",
//   },
//   {
//     name: "Photoshop",
//     link: "#",
//   },
// ];

const shapeList = [
  {
    name: "16M Students Happy",
    link: "#",
    className: "ccl-shape shape-1",
  },
  {
    name: "130K+ Total Courses",
    link: "#",
    className: "ccl-shape shape-2",
  },
  {
    name: "89% Successful Students",
    link: "#",
    className: "ccl-shape shape-3",
  },
  {
    name: "23M+ Learners",
    link: "#",
    className: "ccl-shape shape-4",
  },
  {
    name: "36+ Languages",
    link: "#",
    className: "ccl-shape shape-5",
  },
];

const MyBanner = () => {
  const navigate = useNavigate();
  const [inputValue, setInputValue] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    const trimmedValue = inputValue.trim();

    if (trimmedValue) {
      navigate("/course", {
        state: { searchTerm: trimmedValue },
      });
    }
  };
  return (
    <section className="banner-section">
      <div className="container">
        <div className="section-wrapper">
          <div className="row align-items-center">
            <div className="col-xxl-5 col-xl-6 col-lg-10">
              <div className="banner-content">
                <h6 className="subtitle text-uppercase fw-medium">
                  {subTitle}
                </h6>
                {title}
                <p className="desc">{desc}</p>
                <form onSubmit={handleSearch}>
                  <div className="banner-icon">
                    <i className="icofont-search"></i>
                  </div>
                  <input
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    type="text"
                    placeholder="Keywords of your course"
                  />
                  <button
                    className="text-white p-2"
                    style={{ backgroundColor: "#26C976", color: "#FFFFFF" }}
                    type="submit"
                  >
                    Search Course
                  </button>
                </form>
              </div>
            </div>
            <div className="col-xxl-7 col-xl-6">
              <div className="banner-thumb">
                <img src={myImage} alt="img" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="all-shapes"></div>
      <div className="cbs-content-list d-none">
        <ul className="lab-ul">
          {shapeList.map((val, i) => (
            <li className={val.className} key={i}>
              <a href={val.link}>{val.name}</a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default MyBanner;
