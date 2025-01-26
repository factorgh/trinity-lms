import {
  MdBarChart,
  MdCloud,
  MdCode,
  MdEngineering,
  MdLibraryBooks,
  MdOutlineBrush,
  MdOutlinePalette,
  MdPhoneAndroid,
  MdSecurity,
} from "react-icons/md";
import { Link } from "react-router-dom";

const subTitle = "Popular Category";
const title = "Popular Category For Learn";

const btnText = "Browse All Categories";

const categoryList = [
  {
    imgUrl: "assets/images/category/icon/01.jpg",
    imgAlt: "category rajibraj91 rajibraj",
    title: "Computer Science",
    count: "10 Course",
  },
  {
    imgUrl: "assets/images/category/icon/02.jpg",
    imgAlt: "category rajibraj91 rajibraj",
    title: "Dev Ops",
    count: "04 Course",
  },
  {
    imgUrl: "assets/images/category/icon/03.jpg",
    imgAlt: "category rajibraj91 rajibraj",
    title: "Cyber Security",
    count: "12 Course",
  },
  {
    imgUrl: "assets/images/category/icon/04.jpg",
    imgAlt: "category rajibraj91 rajibraj",
    title: "Data Science Analytics",
    count: "08 Course",
  },
  {
    imgUrl: "assets/images/category/icon/05.jpg",
    imgAlt: "category rajibraj91 rajibraj",
    title: "Robotics",
    count: "15 Course",
  },
  {
    imgUrl: "assets/images/category/icon/06.jpg",
    imgAlt: "category rajibraj91 rajibraj",
    title: "Artificial Intelligence",
    count: "38 Course",
  },
];

const categories = [
  { icon: <MdLibraryBooks />, title: "Web Development" },
  { icon: <MdPhoneAndroid />, title: "Mobile Development" },
  { icon: <MdBarChart />, title: "Data Science" },
  { icon: <MdCode />, title: "Programming Languages" },
  { icon: <MdOutlinePalette />, title: "Graphic Design" },
  { icon: <MdSecurity />, title: "Cybersecurity" },
  { icon: <MdCloud />, title: "Cloud Computing" },
  { icon: <MdEngineering />, title: "DevOps" },
  { icon: <MdOutlineBrush />, title: "UI/UX" },
];

const Category = () => {
  return (
    <div className="category-section py-10">
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
              <div className="category-item text-center cursor-pointer" key={i}>
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
          <div className="text-center mt-6">
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
