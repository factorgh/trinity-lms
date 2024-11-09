const desc =
  "Eduaid is the number one world-class e-learning platform. Thousands of students are always learning within this platform.";

const courseTitle = "Courses";
const courseTitleTwo = "Quick Links";

const addressList = [
  {
    iconName: "icofont-google-map",
    text: "Trassaco GL-155-6183 Accra, Ghana.",
  },
  {
    iconName: "icofont-phone",
    text: "+233 20 957 4338",
  },
  {
    iconName: "icofont-envelope",
    text: "info@creationconsult.com",
  },
];

const socialList = [
  {
    iconName: "icofont-facebook",
    siteLink: "#",
    className: "facebook",
  },
  {
    iconName: "icofont-twitter",
    siteLink: "#",
    className: "twitter",
  },
  {
    iconName: "icofont-linkedin",
    siteLink: "#",
    className: "linkedin",
  },
  {
    iconName: "icofont-instagram",
    siteLink: "#",
    className: "instagram",
  },
  {
    iconName: "icofont-pinterest",
    siteLink: "#",
    className: "pinterest",
  },
];

const courseList = [
  {
    text: "All Courses",
    link: "#",
  },
  {
    text: "Forms and Admission Materials",
    link: "#",
  },
  {
    text: "Professional Courses",
    link: "#",
  },
  {
    text: "Course Outline",
    link: "#",
  },
  {
    text: "Policy",
    link: "#",
  },
  {
    text: "FAQs",
    link: "#",
  },
  {
    text: "Online Courses",
    link: "#",
  },
];

const FooterTwo = () => {
  return (
    <footer className="bg-white text-gray-700 pt-12 pb-6">
      <div className="container  px-6 lg:px-12 flex justify-around items-center">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mb-12">
          {/* Address Section */}
          <div>
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">
              About Eduaid
            </h3>
            <p className="text-base text-gray-600 mb-6">{desc}</p>
            <ul className="space-y-4">
              {addressList.map((val, i) => (
                <li key={i} className="flex items-center text-gray-600">
                  <i
                    className={`icofont ${val.iconName} text-lg mr-3 text-green-500`}
                  />
                  {val.text}
                </li>
              ))}
            </ul>
            <div className="flex space-x-4 mt-6">
              {socialList.map((val, i) => (
                <a
                  key={i}
                  href={val.siteLink}
                  className="text-gray-600 hover:text-green-500 transition duration-300"
                >
                  <i className={`icofont ${val.iconName} text-2xl`} />
                </a>
              ))}
            </div>
          </div>
          {/* Courses Section */}
          <div>
            <h4 className="text-2xl font-semibold text-gray-800 mb-4">
              {courseTitle}
            </h4>
            <ul className="space-y-4">
              {courseList.map((val, i) => (
                <li key={i}>
                  <a
                    href={val.link}
                    className="text-gray-600 hover:text-green-500 transition duration-300"
                  >
                    {val.text}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className="hidden lg:block">
            <h4 className="text-2xl font-semibold text-gray-800 mb-4">
              {courseTitleTwo}
            </h4>
            <ul className="space-y-4">
              {courseList.map((val, i) => (
                <li key={i}>
                  <a
                    href={val.link}
                    className="text-gray-600 hover:text-green-500 transition duration-300"
                  >
                    {val.text}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterTwo;
