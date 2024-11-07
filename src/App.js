import { BrowserRouter, Route, Routes } from "react-router-dom";

import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";

import ScrollToTop from "./component/layout/ScrollToTop";
import ErrorPage from "./page/404";
import AboutPage from "./page/about";
import BlogPage from "./page/blog";
import BlogPageTwo from "./page/blog-2";
import BlogPageThree from "./page/blog-3";
import BlogSingle from "./page/blog-single";
import CartPage from "./page/cart-page";
import ContactPage from "./page/contact";
import CoursePage from "./page/course";
// import CourseSingle from "./page/course-single";
import CourseView from "./page/course-view";
import ForgetPass from "./page/forgetpass";
import Home from "./page/home";

import "bootstrap/dist/css/bootstrap.min.css";
import { useContext } from "react";
import { Toaster } from "react-hot-toast";
import AddNewCoursePage from "./common/common-pages/add-new-course-page";
import InstructorDashboardpage from "./common/common-pages/instructor-dashboard-page";
import RouteGuard from "./common/components/route-guard";
import { AuthContext } from "./common/context/auth-context";
import InstructorPage from "./page/instructor";
import LoginPage from "./page/login";
import SearchNone from "./page/search-none";
import SearchPage from "./page/search-page";
import ShopPage from "./page/shop";
import ShopDetails from "./page/shop-single";
import SignupPage from "./page/signup";
import TeamPage from "./page/team";
import TeamSingle from "./page/team-single";

function App() {
  const { auth } = useContext(AuthContext);

  return (
    <BrowserRouter>
      <Toaster
        toastOptions={{
          style: {
            border: "1px solid #713200",
            padding: "16px",
            color: "#713200",
          },
        }}
      />
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="course" element={<CoursePage />} />
        {/* <Route path="course-single" element={<CourseSingle />} /> */}
        <Route path="course-view" element={<CourseView />} />
        <Route path="blog" element={<BlogPage />} />
        <Route path="blog-2" element={<BlogPageTwo />} />
        <Route path="blog-3" element={<BlogPageThree />} />
        <Route path="blog-single" element={<BlogSingle />} />
        <Route path="about" element={<AboutPage />} />
        <Route path="team" element={<TeamPage />} />
        <Route path="team-single" element={<TeamSingle />} />
        <Route path="instructor" element={<InstructorPage />} />
        <Route path="shop" element={<ShopPage />} />
        <Route path="shop-single" element={<ShopDetails />} />
        <Route path="cart-page" element={<CartPage />} />
        <Route path="search-page" element={<SearchPage />} />
        <Route path="search-none" element={<SearchNone />} />
        <Route path="contact" element={<ContactPage />} />
        <Route path="login" element={<LoginPage />} />
        <Route path="signup" element={<SignupPage />} />
        <Route path="forgetpass" element={<ForgetPass />} />

        {/* Instructor Protected Routes */}
        <Route
          path="/instructor-dashboard"
          element={
            <RouteGuard
              element={<InstructorDashboardpage />}
              authenticated={auth?.authenticate}
              user={auth?.user}
            />
          }
        />
        <Route
          path="/instructor/create-new-course"
          element={<AddNewCoursePage />}
        />
        <Route
          path="/instructor/edit-course/:courseId"
          element={<AddNewCoursePage />}
        />

        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
