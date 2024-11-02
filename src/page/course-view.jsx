import { Spin } from "antd"; // Import Ant Design's Spin component
import { Play } from "lucide-react";
import React, { Fragment, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import VideoPlayer from "../common/components/video-player";
import Footer from "../component/layout/footer";
import Header from "../component/layout/header";
import PageHeader from "../component/layout/pageheader";

const CourseView = () => {
  const [icon, setIcon] = useState(false);
  const [showConfetti, setShowConfetti] = useState(false);

  const { state } = useLocation();
  const course = state?.courseDetails;

  const [currentLecture, setCurrentLecture] = useState(null);
  const [loading, setLoading] = useState(false); // New loading state

  useEffect(() => {
    if (showConfetti) setTimeout(() => setShowConfetti(false), 15000);
  }, [showConfetti]);

  //   async function fetchCurrentCourseProgress() {
  //     const response = await getCurrentCourseProgressService(
  //       auth?.user?._id,
  //       course.id
  //     );
  //     if (response?.success) {
  //       if (response?.data?.completed) {
  //         setCurrentLecture(response?.data?.courseDetails?.curriculum[0]);
  //         setShowConfetti(true);
  //         return;
  //       }

  //       if (response?.data?.progress?.length === 0) {
  //         setCurrentLecture(response?.data?.courseDetails?.curriculum[0]);
  //       } else {
  //         const lastIndexOfViewedAsTrue = response?.data?.progress.reduceRight(
  //           (acc, obj, index) => {
  //             return acc === -1 && obj.viewed ? index : acc;
  //           },
  //           -1
  //         );

  //         setCurrentLecture(
  //           response?.data?.courseDetails?.curriculum[lastIndexOfViewedAsTrue + 1]
  //         );
  //       }
  //     }
  //   }

  //   useEffect(() => {
  //     fetchCurrentCourseProgress();
  //   }, [course?.id]);

  const handleLectureChange = (item) => {
    setLoading(true); // Set loading state to true
    setCurrentLecture(item); // Update the current lecture

    // Simulate a delay (e.g., for fetching video URL) and then reset loading state
    setTimeout(() => {
      setLoading(false); // Reset loading state after video is ready
    }, 1000); // Adjust delay as necessary
  };

  return (
    <Fragment>
      <Header />
      <PageHeader title={course?.welcomeMessage} curPage={"Course View"} />
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
                          <Spin size="large" /> // Show loading spinner while loading
                        ) : (
                          <VideoPlayer
                            width="100%"
                            height="500px"
                            url={currentLecture?.videoUrl}
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
                  <div className="col-lg-4 col-sm-8 col-12">
                    <div className="video-list-area">
                      <div className="course-select-area border-radius-12">
                        <div className="csa-title mb-4 ml-5">
                          <h5>Course Outline</h5>
                        </div>
                        <div className="h-96 w-full px-3 overflow-auto">
                          {course?.curriculum.map((item) => (
                            <div
                              className="flex items-center space-x-2 text-sm text-black font-bold cursor-pointer"
                              key={item._id}
                            >
                              <div
                                onClick={() => handleLectureChange(item)} // Use the new handler
                                className="flex p-2 bg-green-400 m-1 w-full text-white gap-5 items-center"
                              >
                                <Play className="h-4 w-4 " />
                                <h3 className="text-white">{item?.title}</h3>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
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
