import { Fragment } from "react";
import { Navigate, useLocation } from "react-router-dom";

function RouteGuard({ authenticated, user, element }) {
  const location = useLocation();

  console.log(authenticated, user, "useruser");

  if (!authenticated && !location.pathname.includes("/login")) {
    return <Navigate to="/login" />;
  }

  if (
    authenticated &&
    user?.role !== "instructor" &&
    (location.pathname.includes("instructor-dashboard") ||
      location.pathname.includes("/login"))
  ) {
    return <Navigate to="/" />;
  }
  if (
    authenticated &&
    user?.role !== "instructor" &&
    authenticated.role === "teacher" &&
    location.pathname.includes("teacher-dashboard")
  ) {
    return <Navigate to="/teacher-dashboard" />;
  }
  if (
    authenticated &&
    user?.role !== "instructor" &&
    authenticated.role !== "teacher" &&
    authenticated.role === "school" &&
    location.pathname.includes("student-dashboard")
  ) {
    return <Navigate to="/teacher-dashboard" />;
  }

  if (
    authenticated &&
    user.role === "instructor" &&
    !location.pathname.includes("instructor-dashboard")
  ) {
    return <Navigate to="/instructor-dashboard" />;
  }

  return <Fragment>{element}</Fragment>;
}

export default RouteGuard;
