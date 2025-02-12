import { useContext } from "react";
import { Toaster } from "react-hot-toast";
import { BrowserRouter, Route, Routes } from "react-router-dom";

// Styles
import "bootstrap/dist/css/bootstrap.min.css";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";

// Components & Layout
import RouteGuard from "./common/components/route-guard";
import { AuthContext } from "./common/context/auth-context";
import ScrollToTop from "./component/layout/ScrollToTop";

// Pages
import AddNewCoursePage from "./common/common-pages/add-new-course-page";
import InstructorDashboardpage from "./common/common-pages/instructor-dashboard-page";
import ErrorPage from "./page/404";
import AboutPage from "./page/about";
import BlogPage from "./page/blog";
import BlogPageTwo from "./page/blog-2";
import BlogPageThree from "./page/blog-3";
import BlogSingle from "./page/blog-single";
import CartPage from "./page/cart-page";
import ContactPage from "./page/contact";
import CoursePage from "./page/course";
import CourseDetailPage from "./page/course-detail-page";
import CourseView from "./page/course-view";
import ForgetPass from "./page/forgetpass";
import Home from "./page/home";
import InstructorPage from "./page/instructor";
import LoginPage from "./page/login";
import SearchNone from "./page/search-none";
import SearchPage from "./page/search-page";
import ShopPage from "./page/shop";
import ShopDetails from "./page/shop-single";
import SignupPage from "./page/signup";
import StudentDashboard from "./page/student-dashbaord";
import TeacherDashboard from "./page/teacher-dashboard";
import TeamPage from "./page/team";
import TeamSingle from "./page/team-single";

// Quiz Components
import QuestionManager from "./common/common-pages/instructor-quizzes-page";
import Main from "./common/components/quiz/components/Main";
import Quiz from "./common/components/quiz/components/Quiz";
import Result from "./common/components/quiz/components/Result";

function App() {
  const { auth } = useContext(AuthContext);

  return (
    <BrowserRouter>
      {/* Global Notifications */}
      <Toaster
        toastOptions={{
          style: {
            border: "1px solid #333",
            padding: "12px",
            color: "#333",
            borderRadius: "8px",
            background: "#fff",
          },
        }}
      />

      <ScrollToTop />

      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<Home />} />
        <Route path="about" element={<AboutPage />} />
        <Route path="blog" element={<BlogPage />} />
        <Route path="blog-2" element={<BlogPageTwo />} />
        <Route path="blog-3" element={<BlogPageThree />} />
        <Route path="blog-single" element={<BlogSingle />} />
        <Route path="team" element={<TeamPage />} />
        <Route path="team-single" element={<TeamSingle />} />
        <Route path="instructor" element={<InstructorPage />} />
        <Route path="shop" element={<ShopPage />} />
        <Route path="shop-single" element={<ShopDetails />} />
        <Route path="cart" element={<CartPage />} />
        <Route path="search" element={<SearchPage />} />
        <Route path="search-none" element={<SearchNone />} />
        <Route path="contact" element={<ContactPage />} />
        <Route path="login" element={<LoginPage />} />
        <Route path="signup" element={<SignupPage />} />
        <Route path="forgot-password" element={<ForgetPass />} />

        {/* Course Routes */}
        <Route path="course" element={<CoursePage />} />
        <Route path="course-view" element={<CourseView />} />
        <Route path="course-detail" element={<CourseDetailPage />} />

        {/* Quiz Routes */}
        <Route
          path="quiz"
          element={
            <Quiz />
            // <CheckUserExist>

            // </CheckUserExist>
          }
        />
        <Route
          path="result"
          element={
            <Result />
            // <CheckUserExist>

            // </CheckUserExist>
          }
        />
        <Route path="quiz-home" element={<Main />} />

        {/* Protected Routes */}
        <Route
          path="instructor-dashboard"
          element={
            <RouteGuard
              element={<InstructorDashboardpage />}
              authenticated={auth?.authenticate}
              user={auth?.user}
            />
          }
        />
        <Route
          path="teacher-dashboard"
          element={
            <RouteGuard
              element={<TeacherDashboard />}
              authenticated={auth?.authenticate}
              user={auth?.user}
            />
          }
        />
        <Route
          path="instructor-quizzes"
          element={
            <RouteGuard
              element={<QuestionManager />}
              authenticated={auth?.authenticate}
              user={auth?.user}
            />
          }
        />
        <Route
          path="student-dashboard"
          element={
            <RouteGuard
              element={<StudentDashboard />}
              authenticated={auth?.authenticate}
              user={auth?.user}
            />
          }
        />
        <Route path="instructor/create-course" element={<AddNewCoursePage />} />
        <Route
          path="instructor/edit-course/:courseId"
          element={<AddNewCoursePage />}
        />

        {/* Error Page */}
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
