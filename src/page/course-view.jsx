import { Collapse, Divider } from "antd"; // Ant Design components for styling
import { CheckCircle, Play } from "lucide-react"; // Icons from lucide-react
import React, { Fragment, useEffect, useState } from "react";

import { MdArrowDropDown } from "react-icons/md";
import { useLocation } from "react-router-dom";
import VideoPlayer from "../common/components/video-player";
import Footer2 from "../component/layout/footer-2";
import Header from "../component/layout/header";
import Loading from "../component/loading";

const { Panel } = Collapse;

const CourseView = () => {
  const [icon, setIcon] = useState(false);

  const { state } = useLocation();
  const course = state?.course;
  console.log(course);

  const [currentLecture, setCurrentLecture] = useState(null);
  const [loading, setLoading] = useState(false);

  // Automatically select the first lecture on page load
  useEffect(() => {
    if (course?.curriculum && course?.curriculum.length > 0) {
      setCurrentLecture(course.curriculum[0]);
    }
  }, [course?.curriculum]);

  // Handle lecture change when clicking on a new video from the list
  const handleLectureChange = (item) => {
    setLoading(true);
    setCurrentLecture(item);

    setTimeout(() => {
      setLoading(false);
    }, 1000);
  };

  // Function to handle the next video when current video ends
  const handleNextVideo = () => {
    const currentIndex = course?.curriculum.findIndex(
      (lecture) => lecture._id === currentLecture?._id
    );
    const nextLecture = course?.curriculum[currentIndex + 1];

    if (nextLecture) {
      setCurrentLecture(nextLecture);
    } else {
      console.log("No more lectures");
    }
  };

  return (
    <Fragment>
      {/* {showConfetti && <Confetti />} */}
      <Header />
      {/* <HeroSection course={course} /> */}
      <div className="banner-section style-1"></div>{" "}
      {/* Course Details Section */}
      <div className="course-view-section  section-bg">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="course-view">
                <div className="row justify-content-center">
                  <div className="col-12 col-lg-8">
                    <div className="video-part mb-4 mb-lg-0">
                      <div className="vp-title mb-4"></div>
                      <div className="vp-video mb-4">
                        {loading ? (
                          <Loading />
                        ) : (
                          <VideoPlayer
                            width="100%"
                            height="500px"
                            url={currentLecture?.videoUrl}
                            autoplay
                            onVideoEnd={handleNextVideo}
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
                          <p className="text-[15px]">{course?.description}</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Course Outline Section */}
                  <div className="col-12 col-lg-4">
                    <div className="video-list-area">
                      <div className="course-select-area border-radius-12">
                        {/* Course Structure Section */}
                        <h3 className="text-2xl font-bold mb-3">
                          Course Structure
                        </h3>

                        {/* Course Curriculum */}
                        <div className="border border-gray-300 rounded">
                          <h4 className="text-lg font-semibold p-2 border border-gray-300 flex items-center gap-3">
                            <MdArrowDropDown />
                            <span>{course?.title}</span>
                          </h4>

                          <div className="p-2">
                            {course?.curriculum?.map((item) => (
                              <div
                                key={item?.id}
                                onClick={() => handleLectureChange(item)}
                                className={`flex items-center gap-3 p-2 rounded cursor-pointer transition-all 
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
                                <span>{item?.title}</span>
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* Course Description */}
                        {/* <div className="mt-6 p-2">
                          <h4 className="text-xl font-semibold flex items-center gap-3">
                            Course Description
                          </h4>
                          <p className="text-[15px]">{course?.description}</p>
                        </div> */}
                      </div>
                    </div>
                  </div>
                </div>

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

                <div className="related-courses">
                  <h3 className="text-2xl font-mono mb-6 ">
                    Related courses coming soon ...
                  </h3>
                  <div className="flex gap-6">
                    {/* Add cards for related courses */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer2 />
    </Fragment>
  );
};

export default CourseView;
