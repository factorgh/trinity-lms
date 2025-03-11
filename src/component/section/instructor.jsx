import { Card, Rate } from "antd"; // Using Ant Design's Card and Rate components
import React from "react";
import { Link } from "react-router-dom";
import instructorImg1 from "../../../src/assets/images/instructor1.png";
import instructorImg2 from "../../../src/assets/images/instructor2.jpeg";
import instructorImg3 from "../../../src/assets/images/instructor3.png";
import instructorImg4 from "../../../src/assets/images/instructor4.jpeg";

const subTitle = "WORLD-CLASS INSTRUCTORS";
const title = "Classes Taught By Real Creators";

const instructorList = [
  {
    imgUrl: instructorImg1,
    imgAlt: "instructor Emilee Logan",
    name: "Donald Richardson",
    degi: "Master of Education Degree",
    courseCount: "08 courses",
    studentAnroll: "30 students",
    skills: ["JavaScript", "React", "Node.js"],
  },
  {
    imgUrl: instructorImg2,
    imgAlt: "instructor Donald Logan",
    name: "Emilee Logan",

    degi: "Master of Education Degree",
    courseCount: "08 courses",
    studentAnroll: "30 students",
    skills: ["Python", "Django", "Machine Learning"],
  },
  {
    imgUrl: instructorImg3,
    imgAlt: "instructor Oliver Porter",
    name: "Oliver Porter",
    degi: "Master of Education Degree",
    courseCount: "08 courses",
    studentAnroll: "30 students",
    skills: ["UI/UX Design", "Photoshop", "Figma"],
  },
  {
    imgUrl: instructorImg4,
    imgAlt: "instructor Nahla Jones",
    name: "Nahla Jones",
    degi: "Master of Education Degree",
    courseCount: "08 courses",
    studentAnroll: "30 students",
    skills: ["Java", "Spring Boot", "Microservices"],
  },
];

const Instructor = () => {
  return (
    <div className="instructor-section py-16 bg-gray-50 mt-5">
      <div className="container mx-auto px-6 mt-5">
        <div className="section-header text-center mb-10">
          <span
            style={{ color: "#26C976" }}
            className="subtitle text-lg font-semibold"
          >
            {subTitle}
          </span>
          <h2 className="title text-3xl font-bold mt-2">{title}</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {instructorList.map((val, i) => (
            <div key={i}>
              <Card
                hoverable
                cover={<img alt={val.imgAlt} src={val.imgUrl} />}
                className="shadow-lg rounded-lg border border-gray-200"
              >
                <div className="text-center mb-4">
                  <Link to="/team-single">
                    <h4 className="text-xl font-semibold text-gray-800">
                      {val.name}
                    </h4>
                  </Link>
                  <p className="text-gray-500 text-sm">{val.degi}</p>
                  <Rate
                    disabled
                    defaultValue={4}
                    className="mt-2 text-yellow-400"
                  />
                </div>

                <div>
                  {/* Skills */}
                  <ul className="flex flex-wrap justify-center gap-2 mb-4">
                    {val.skills.map((skill, index) => (
                      <li
                        key={index}
                        className="text-xs font-semibold text-gray-600 bg-gray-200 py-1 px-3 rounded-full"
                      >
                        {skill}
                      </li>
                    ))}
                  </ul>
                  <div className="flex justify-between text-sm text-gray-500">
                    <span>
                      <i className="icofont-book-alt mr-1"></i>{" "}
                      {val.courseCount}
                    </span>
                    <span>
                      <i className="icofont-users-alt-3 mr-1"></i>{" "}
                      {val.studentAnroll}
                    </span>
                  </div>
                </div>
              </Card>
            </div>
          ))}
        </div>

        <div className="text-center mt-8">
          <p className="text-gray-700">
            Want to help people learn, grow, and achieve more in life?{" "}
            <Link to="/instructor" className="text-green-500 font-semibold">
              Become an instructor
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Instructor;
