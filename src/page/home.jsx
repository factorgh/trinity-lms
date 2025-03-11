import { Fragment } from "react";
import Footer2 from "../component/layout/footer-2";
import Header from "../component/layout/header";
import About from "../component/section/about";
import Achievement from "../component/section/achievement";
import Category from "../component/section/category";
import Course from "../component/section/course";
import Instructor from "../component/section/instructor";
import MyBanner from "../component/section/my-banner";
import Sponsor from "../component/section/sponsor";
import Student from "../component/section/student";

const Home = () => {
  return (
    <Fragment>
      <Header />
      {/* <Banner /> */}
      <MyBanner />
      {/* <Sponsor /> */}
      <Category />
      <Course />
      <About />
      <Instructor />
      <Student />
      {/* <Blog /> */}
      <Achievement />
      <Footer2 />
    </Fragment>
  );
};

export default Home;
