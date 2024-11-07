/* eslint-disable jsx-a11y/img-redundant-alt */
import React from "react";
import LottieComponent from "./lottie-item";

const HeroSection = ({ course }) => {
  return (
    <section className="hero-section py-20 lg:py-32 flex flex-col lg:flex-row items-center justify-between relative  bg-white shadow-md rounded-md">
      {/* Left Text Section */}
      <div className="hero-text w-full lg:w-1/2 px-6 lg:px-12  lg:text-left ">
        <h1 className="text-3xl lg:text-5xl font-bold text-gray-800 mb-6 leading-tight">
          {course?.title}
        </h1>
        <p className="text-sm text-gray-600 mb-8">{course?.description}</p>
        {/* CTA Button */}
        <a
          href="#courses"
          className="bg-emerald-400 text-white py-3 px-6 rounded-lg text-lg font-semibold shadow-lg hover:bg-green-700 transition duration-300"
        >
          Start Learning Today
        </a>
      </div>

      {/* Right Image Section */}
      <div className="hero-image w-full lg:w-1/2 mt-10 lg:mt-5 mx-5">
        {/* <img
          src=""
          alt="Learning Image"
          className="w-full h-full object-cover rounded-lg shadow-xl"
        /> */}
        <LottieComponent />
      </div>

      {/* Decorative Elements */}
      {/* <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-green-600 via-green-700 to-green-800 opacity-20"></div> */}
    </section>
  );
};

export default HeroSection;
