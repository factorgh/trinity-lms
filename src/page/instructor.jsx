import { Fragment, useState } from "react";
import { Link } from "react-router-dom";
import Footer2 from "../component/layout/footer-2";
import Header from "../component/layout/header";
import Student from "../component/section/student";

const subTitle = "Teach on Edukon";
const title = "Discover Your Potential. Make A Global Impact.";

let categoryItemList = [
  {
    imgUrl: "assets/images/category/icon/15.jpg",
    imgAlt: "Build Your Brand",
    title: "Build Your Brand",
    desc: "Establish yourself as an expert and grow your influence in your field.",
  },
  {
    imgUrl: "assets/images/category/icon/16.jpg",
    imgAlt: "Plan Your Course",
    title: "Plan Your Course",
    desc: "Design engaging lessons that inspire and educate students effectively.",
  },
  {
    imgUrl: "assets/images/category/icon/17.jpg",
    imgAlt: "Shape the Future",
    title: "Shape the Future",
    desc: "Empower the next generation by sharing your knowledge and expertise.",
  },
];

const InstructorPage = () => {
  // Form state
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    expertise: "",
    bio: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Instructor registration data submitted:", formData);
    // Here you would send formData to your server or API
  };

  return (
    <Fragment>
      <Header />
      <div className="banner-section style"></div>
      <div className="category-section padding-tb section-bg style-3">
        <div className="container">
          <div className="section-header text-center">
            <span style={{ color: "#26C976" }} className="subtitle">
              {subTitle}
            </span>
            <h2 className="title">{title}</h2>
          </div>
          <div className="section-wrapper">
            <div className="row g-4 justify-content-center row-cols-lg-3 row-cols-sm-2 row-cols-1">
              {categoryItemList.map((val, i) => (
                <div
                  className="flex flex-col items-center justify-center"
                  key={i}
                >
                  <div className="category-item text-center">
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                      className="category-inner"
                    >
                      <div className="category-thumb">
                        <img src={`${val.imgUrl}`} alt={`${val.imgAlt}`} />
                      </div>
                      <div className="category-content cursor-pointer">
                        <Link to="/signup">
                          <h4 className="text-[20px]">{val.title}</h4>
                        </Link>
                        <p className="text-[15px]">{val.desc}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <Student />
      <div className="instructor-registration-section py-16 bg-teal-100">
        <div className="container mx-auto">
          <div className="section-header text-center mb-12">
            <span className="text-lg font-semibold text-green-500">
              JOIN EDUKON AND SHARE YOUR KNOWLEDGE WITH THE WORLD.
            </span>
            <h2 className="text-3xl font-extrabold text-gray-800 mt-2">
              Become an Instructor
            </h2>
          </div>
          <div className="max-w-3xl mx-auto bg-white p-8 rounded-lg shadow-lg">
            <form onSubmit={handleSubmit}>
              <div className="space-y-6">
                {/* Name Field */}
                <div>
                  <label
                    htmlFor="name"
                    className="block text-lg font-semibold text-gray-700"
                  >
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="mt-2 p-3 w-full border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-teal-500"
                    placeholder="Enter your full name"
                    required
                  />
                </div>

                {/* Email Field */}
                <div>
                  <label
                    htmlFor="email"
                    className="block text-lg font-semibold text-gray-700"
                  >
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="mt-2 p-3 w-full border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-teal-500"
                    placeholder="Enter your email"
                    required
                  />
                </div>

                {/* Expertise Field */}
                <div>
                  <label
                    htmlFor="expertise"
                    className="block text-lg font-semibold text-gray-700"
                  >
                    Course Expertise
                  </label>
                  <input
                    type="text"
                    id="expertise"
                    name="expertise"
                    value={formData.expertise}
                    onChange={handleChange}
                    className="mt-2 p-3 w-full border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-teal-500"
                    placeholder="Enter your course expertise"
                    required
                  />
                </div>

                {/* Bio Field */}
                <div>
                  <label
                    htmlFor="bio"
                    className="block text-lg font-semibold text-gray-700"
                  >
                    Short Bio
                  </label>
                  <textarea
                    id="bio"
                    name="bio"
                    value={formData.bio}
                    onChange={handleChange}
                    className="mt-2 p-3 w-full border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-teal-500"
                    placeholder="Tell us a little about yourself"
                    rows="4"
                    required
                  ></textarea>
                </div>

                {/* Submit Button */}
                <div className="text-center">
                  <button
                    type="submit"
                    className="mt-4 bg-emerald-500 text-white py-3 px-6 rounded-lg text-lg font-semibold hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-teal-500"
                  >
                    Submit Registration
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>

      {/* <Achievement /> */}
      <Footer2 />
    </Fragment>
  );
};

export default InstructorPage;
