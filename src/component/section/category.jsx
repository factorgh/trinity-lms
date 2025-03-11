import {
  MdBarChart,
  MdCloud,
  MdCode,
  MdEngineering,
  MdOutlineBrush,
  MdOutlinePalette,
  MdPhoneAndroid,
  MdSecurity,
} from "react-icons/md";
import {
  FaHeartbeat,
  FaLaptopCode,
  FaChartLine,
  FaMicrophone,
  FaBusinessTime,
  FaPrayingHands,
  FaMoneyBillWave,
  FaHandsHelping,
  FaLeaf,
} from "react-icons/fa";

import { Link } from "react-router-dom";

const subTitle = "Popular Category";
const title = "Popular Category For Learn";

const btnText = "Browse All Categories";

const categoryList = [
  {
    imgUrl: "assets/images/category/icon/01.jpg",
    imgAlt: "category rajibraj91 rajibraj",
    title: "STEM for Girls",
    count: "10 Course",
  },
  {
    imgUrl: "assets/images/category/icon/02.jpg",
    imgAlt: "category rajibraj91 rajibraj",
    title: "Leadership",
    count: "04 Course",
  },
  {
    imgUrl: "assets/images/category/icon/03.jpg",
    imgAlt: "category rajibraj91 rajibraj",
    title: "Women in business",
    count: "12 Course",
  },
  {
    imgUrl: "assets/images/category/icon/04.jpg",
    imgAlt: "category rajibraj91 rajibraj",
    title: "Faith and Spiritual Growth",
    count: "08 Course",
  },
  {
    imgUrl: "assets/images/category/icon/05.jpg",
    imgAlt: "category rajibraj91 rajibraj",
    title: "Financial Literacy",
    count: "15 Course",
  },
  {
    imgUrl: "assets/images/category/icon/06.jpg",
    imgAlt: "category rajibraj91 rajibraj",
    title: "Community Engagement",
    count: "38 Course",
  },
];

// 10 Courses for Girls’ Empowerment & Growth
// 	1.	STEM for Girls – Explore coding, robotics, and engineering, and break barriers in tech.
// 	2.	Leadership & Public Speaking – Learn to lead with confidence and speak with power.
// 	3.	Women in Business & Entrepreneurship – Develop the mindset and skills to start and grow your own business.
// 	4.	Faith & Spiritual Growth – Deepen your connection with God and apply faith-based principles in daily life.
// 	5.	Personal Development & Confidence Building – Unlock your full potential through self-awareness and growth strategies.
// 	6.	Financial Literacy for Young Women – Master budgeting, saving, and investing for a secure future.
// 	7.	Health & Wellness – Learn about nutrition, mental health, and self-care for a balanced life.
// 	8.	Digital Literacy & Cyber Safety – Navigate the digital world safely and harness technology for success.
// 	9.	Community Engagement & Social Impact – Become a changemaker in your community and beyond.
// 	10.	Creative Arts & Storytelling – Express yourself through writing, music, and digital media.

const categories = [
  { icon: <FaLeaf />, title: "Health & Wellness" }, // Health-related icon
  { icon: <FaLaptopCode />, title: "Digital Literacy & Cyber Safety" }, // Laptop coding icon
  { icon: <FaChartLine />, title: "STEM for Girls" }, // Growth/analytics chart
  { icon: <FaMicrophone />, title: "Leadership and Public Speaking" }, // Microphone for public speaking
  { icon: <FaBusinessTime />, title: "Women In Business" }, // Business-related icon
  { icon: <FaPrayingHands />, title: "Faith and Spiritual Growth" }, // Faith-based icon
  { icon: <FaMoneyBillWave />, title: "Financial Literacy for Young Women" }, // Money-related icon
  { icon: <FaHandsHelping />, title: "Community Engagement" }, // Helping hands icon
];

const Category = () => {
  return (
    <div className="category-section py-10 mt-10">
      <div className="container">
        <div className="section-header text-center mb-10">
          <span className="subtitle text-lg font-semibold text-emerald-600">
            {subTitle}
          </span>
          <h2 className="title text-3xl font-bold mt-2">{title}</h2>
        </div>

        <div className="section-wrapper">
          {/* Responsive Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {categories.map((val, i) => (
              <div
                className="category-item text-center cursor-pointer "
                key={i}
              >
                <div className="category-inner flex flex-col items-center justify-center">
                  <div className="text-3xl">{val.icon}</div>
                  <div className="category-content mt-4">
                    <Link to="/course">
                      <h6 className="text-xl font-semibold">{val.title}</h6>
                    </Link>
                    {/* <span className="text-sm text-gray-500">{val.count}</span> */}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Browse All Button */}
          <div className="text-center my-10">
            <Link
              style={{ backgroundColor: "#26C976", color: "#FFFFFF" }}
              to="/course"
              className="lab-btn px-6 py-3 text-lg font-semibold rounded-md"
            >
              <span>{btnText}</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Category;
