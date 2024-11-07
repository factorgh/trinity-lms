import { Card, Collapse, Divider, Spin } from "antd"; // Ant Design components for styling
import { CheckCircle, Play } from "lucide-react"; // Icons from lucide-react
import React, { Fragment, useEffect, useState } from "react";
import Confetti from "react-confetti"; // Import React Confetti
import { useLocation } from "react-router-dom";
import HeroSection from "../common/components/ui/hero-section";
import VideoPlayer from "../common/components/video-player";
import Footer from "../component/layout/footer";
import Header from "../component/layout/header";

const { Panel } = Collapse;

const CourseView = () => {
  const [icon, setIcon] = useState(false);
  const [showConfetti, setShowConfetti] = useState(false);
  const { state } = useLocation();
  const course = state?.courseDetails;
  console.log(course, "course");

  const [currentLecture, setCurrentLecture] = useState(null);
  const [loading, setLoading] = useState(false);

  // Automatically select the first lecture on page load
  useEffect(() => {
    if (course?.curriculum && course?.curriculum.length > 0) {
      setCurrentLecture(course.curriculum[0]);
      // Show confetti when the first video is ready to play
      setShowConfetti(true);

      // Hide confetti after 3 seconds
      setTimeout(() => {
        setShowConfetti(false);
      }, 5000);
    }
  }, [course?.curriculum]);

  useEffect(() => {
    if (showConfetti) setTimeout(() => setShowConfetti(false), 15000);
  }, [showConfetti]);

  // Handle lecture change when clicking on a new video from the list
  const handleLectureChange = (item) => {
    setLoading(true);
    setCurrentLecture(item);

    // Show confetti before the new video starts playing
    setShowConfetti(true);

    setTimeout(() => {
      setLoading(false);
      setShowConfetti(false); // Hide confetti after some time
    }, 1000);
  };

  // Function to handle the next video when current video ends
  const handleNextVideo = () => {
    // Find the index of the current video in the curriculum
    const currentIndex = course?.curriculum.findIndex(
      (lecture) => lecture._id === currentLecture?._id
    );

    // Get the next lecture (if it exists)
    const nextLecture = course?.curriculum[currentIndex + 1];

    if (nextLecture) {
      // If there's a next lecture, update the currentLecture state
      setCurrentLecture(nextLecture);
    } else {
      // If no more lectures, you can either reset to the first or stop
      // setCurrentLecture(course?.curriculum[0]); // Uncomment to loop to the first video
      console.log("No more lectures");
    }
  };

  return (
    <Fragment>
      {/* Confetti will show if showConfetti is true */}
      {showConfetti && <Confetti />}

      <Header />

      {/* Hero Section */}
      <HeroSection course={course} />

      {/* Course Info Section */}
      <div className="course-info-section my-16 px-4 md:px-10">
        <Card
          bordered={false}
          style={{
            width: "100%",
            boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
            borderRadius: "8px",
          }}
          className="p-3 bg-white shadow-lg hidden md:block"
        >
          <div className="flex gap-3 justify-around items-center">
            <div className="course-info-item">
              <h4 className="font-semibold text-lg">Level</h4>
              <p className="text-gray-600 text-sm text-mono">{course?.level}</p>
            </div>

            <Divider className="h-12" type="vertical" />
            <div className="course-info-item">
              <h4 className="font-semibold text-lg">Duration</h4>
              <p className="text-gray-600 text-sm text-mono">6 Weeks</p>
            </div>
            <Divider className="h-12" type="vertical" />
            <div className="course-info-item">
              <h4 className="font-semibold text-lg">Language</h4>
              <p className="text-gray-600 text-sm text-mono">
                {course?.primaryLanguage}
              </p>
            </div>
            <Divider className="h-12 text-slate-900" type="vertical" />
            <div className="course-info-item">
              <h4 className="font-semibold text-lg">Price</h4>
              <p className="text-gray-600 text-sm text-mono">Free</p>
            </div>
          </div>
        </Card>
      </div>

      {/* Course Details Section */}
      <div className="course-view-section padding-tb section-bg">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="course-view">
                <div className="row justify-content-center">
                  <div className="col-lg-8 col-12">
                    <div className="video-part mb-4 mb-lg-0">
                      <div className="vp-title mb-4">
                        <h3>{course?.subtitle}</h3>
                      </div>
                      <div className="vp-video mb-4">
                        {loading ? (
                          <Spin size="large" />
                        ) : (
                          <VideoPlayer
                            width="100%"
                            height="500px"
                            url={currentLecture?.videoUrl}
                            autoplay={true}
                            onVideoEnd={handleNextVideo} // Handle next video when this ends
                          />
                        )}
                      </div>
                      <div className={`content-wrapper ${icon ? "open" : ""}`}>
                        <div
                          className="content-icon d-lg-none"
                          onClick={() => setIcon(!icon)}
                        >
                          <i className="icofont-caret-down"></i>
                        </div>
                        <div className="text-2xl font-bold mb-10">
                          <h4>Description</h4>
                          <p>{course?.description}</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Course Outline Section */}
                  <div className="col-lg-4 col-sm-8 col-12">
                    <div className="video-list-area">
                      <div className="course-select-area border-radius-12">
                        <div className="csa-title mb-4 ml-5">
                          <h5>Course Outline</h5>
                        </div>
                        <div className="h-96 w-full px-3 overflow-auto">
                          {course?.curriculum.map((item) => (
                            <div
                              key={item._id}
                              onClick={() => handleLectureChange(item)}
                              className={`flex items-center space-x-2 text-sm font-bold cursor-pointer p-2 m-1 w-full gap-5
                                ${
                                  currentLecture?._id === item._id
                                    ? "bg-green-500 text-white"
                                    : "bg-gray-200 text-black"
                                }
                              `}
                            >
                              {currentLecture?._id === item._id ? (
                                <CheckCircle className="h-4 w-4" />
                              ) : (
                                <Play className="h-4 w-4" />
                              )}
                              <h3>{item?.title}</h3>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Add a divider */}
                <Divider className="my-12" />

                {/* FAQ Section */}
                <div className="faq-section mb-12">
                  <h3 className="text-2xl font-semibold mb-6">
                    Frequently Asked Questions
                  </h3>
                  <Collapse defaultActiveKey={["1"]}>
                    <Panel header="What is the course duration?" key="1">
                      <p className="text-gray-600 text-sm">
                        The course lasts for approximately 6 weeks, with weekly
                        lessons and assignments.
                      </p>
                    </Panel>
                    <Panel header="Do I need any prior experience?" key="2">
                      <p className="text-gray-600 text-sm">
                        This course is designed for beginners, but some
                        familiarity with the basics of programming will help.
                      </p>
                    </Panel>
                    <Panel
                      header="Will I get a certificate after completion?"
                      key="3"
                    >
                      <p className="text-gray-600 text-sm">
                        Yes, a certificate will be provided upon successful
                        completion of the course.
                      </p>
                    </Panel>
                  </Collapse>
                </div>

                {/* Call-to-Action Section */}

                {/* Related Courses Section */}
                <div className="related-courses">
                  <h3 className="text-2xl font-mono mb-6 ">
                    Related courses coming soon ...
                  </h3>
                  <div className="flex gap-6">
                    {/* Add cards for related courses */}
                    {/* <Card
                      title="Advanced React"
                      bordered={false}
                      className="w-1/3 shadow-lg"
                    >
                      <p>
                        Learn advanced React concepts and enhance your front-end
                         skills.
                      </p>
                    </Card>
                    <Card
                      title="JavaScript for Beginners"
                      bordered={false}
                      className="w-1/3 shadow-lg"
                    >
                      <p>
                        Start with the fundamentals of JavaScript and become a
                        full-stack developer.
                      </p>
                    </Card> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </Fragment>
  );
};

export default CourseView;
