import { Card, Rate } from "antd"; // Ant Design's Card and Rate components
import React from "react";
import { Link } from "react-router-dom";
import specialImg from "../../../src/assets/images/special.jpg";
import student3 from "../../../src/assets/images/student1.jpeg";
import student2 from "../../../src/assets/images/student2.jpeg";
import student1 from "../../../src/assets/images/student4.jpeg";

const subTitle = "Loved by 200,000+ students";
const title = "Students Community Feedback";
const studentList = [
  {
    imgUrl: student1,
    imgAlt: "Student Oliver Beddows",
    name: "Oliver Beddows",
    degi: "UX Designer",
    desc: "Edukon has transformed my learning experience! The courses are well-structured, the instructors are highly knowledgeable, and the interactive content keeps me engaged. Highly recommended!",
  },
  {
    imgUrl: student2,
    imgAlt: "Student Madley Pondor",
    name: "Madley Pondor",
    degi: "UX Designer",
    desc: "An excellent platform for upskilling! The flexibility of online learning, combined with expert-led courses, has helped me advance my career. The certification programs are a great bonus!",
  },
  {
    imgUrl: student3,
    imgAlt: "Student Alex Carter",
    name: "Alex Carter",
    degi: "Web Developer",
    desc: "I love how Edukon provides real-world learning experiences. The projects and practical exercises make it easy to apply what I learn. This platform has been a game-changer for me!",
  },
];

const Student = () => {
  return (
    <div className="student-feedbak-section py-16 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="section-header text-center mb-12">
          <span className="text-lg font-semibold text-green-500">
            {subTitle}
          </span>
          <h2 className="text-3xl font-extrabold text-gray-800 mt-2">
            {title}
          </h2>
        </div>

        <div className="flex flex-col lg:flex-row justify-between gap-12">
          {/* Left Side (Video Section) */}
          <div className="w-full lg:w-1/2 relative">
            <img
              src={specialImg}
              alt="student feedback"
              className="rounded-lg shadow-lg w-full h-full object-cover"
            />
            <a
              href="/"
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-green-500 text-white p-4 rounded-full"
              target="_blank"
              rel="noreferrer"
            >
              <i className="icofont-ui-play text-3xl"></i>
            </a>
          </div>

          {/* Right Side (Student Feedback Section) */}
          <div className="w-full lg:w-1/2">
            {studentList.map((val, i) => (
              <Card
                key={i}
                className="mb-8 shadow-lg rounded-lg border border-gray-200"
                style={{ width: "100%", marginBottom: "20px" }} // Adjust card size
              >
                <div className="flex justify-between items-center mb-4">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 rounded-full overflow-hidden">
                      <img
                        src={val.imgUrl}
                        alt={val.imgAlt}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <Link to="/team-single">
                        <h6 className="text-lg font-semibold text-gray-800 mr-3">
                          {val.name}
                        </h6>
                      </Link>
                      <span className="text-sm text-gray-500">{val.degi}</span>
                    </div>
                  </div>
                  <Rate disabled defaultValue={4} className="text-yellow-400" />
                </div>
                <p className="text-gray-700 text-sm">{val.desc}</p>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Student;
