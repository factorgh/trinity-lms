import React from "react";
import CountUp from "react-countup";
import instructorImg1 from "../../../src/assets/images/instructor1.png";
import instructorImg2 from "../../../src/assets/images/instructor2.jpeg";

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
    siteLink: "/instructor",
  },
  {
    imgUrl: instructorImg2,
    imgAlt: "Achievement: Join Our Course",
    title: "If You Join Our Course",
    desc: "Seamlessly engage technically sound, collaborative, goal-oriented content rather than ethically.",
    btnText: "Register For Free",
    siteLink: "/signup",
  },
];

const Achievement = () => {
  return (
    <div className="achievement-section py-16 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="section-header text-center mb-12">
          <span className="text-lg font-semibold text-green-500">
            {subTitle}
          </span>
          <h2 className="text-3xl font-extrabold text-gray-800 mt-2">
            {title}
          </h2>
        </div>

        {/* Achievement Counter Section */}
        <div className="counter-part mb-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 justify-items-center">
            {achievementList.map((val, i) => (
              <div
                className="count-item bg-white p-6 rounded-xl shadow-lg text-center"
                key={i}
              >
                <div className="count-inner">
                  <div className="count-content">
                    <h2 className="text-4xl font-extrabold text-green-500">
                      <CountUp end={parseInt(val.count)} duration={2} />
                      <span className="text-xl">+</span>
                    </h2>
                    <p className="text-lg text-gray-600 mt-2">{val.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Achieve List Section */}
        <div className="achieve-part">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {achieveList.map((val, i) => (
              <div
                className="achieve-item bg-white rounded-xl shadow-lg overflow-hidden"
                key={i}
              >
                <div className="achieve-inner flex items-center p-6">
                  {/* Image */}
                  <div className="w-24 h-24 rounded-full overflow-hidden mr-6">
                    <img
                      src={val.imgUrl}
                      alt={val.imgAlt}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  {/* Content */}
                  <div>
                    <h4 className="text-xl font-semibold text-gray-800">
                      {val.title}
                    </h4>
                    <p className="text-sm text-gray-600 mt-2">{val.desc}</p>
                    <a
                      href={val.siteLink}
                      className="mt-4 inline-block bg-green-500 text-white py-2 px-6 rounded-lg font-semibold hover:bg-green-600 transition duration-300"
                    >
                      {val.btnText}
                    </a>
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

export default Achievement;
