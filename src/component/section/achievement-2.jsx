import CountUp from "react-countup";

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

const AchievementTwo = () => {
  return (
    <div className="achievement-section padding-tb">
      <div className="container">
        <div className="section-header text-center mb-12">
          <span className="text-lg font-semibold text-green-500">
            {subTitle}
          </span>
          <h2 className="text-3xl font-extrabold text-gray-800 mt-2">
            {title}
          </h2>
        </div>
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
      </div>
    </div>
  );
};

export default AchievementTwo;
