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
    return <Navigate to="/home" />;
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
