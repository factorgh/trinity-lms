/* eslint-disable jsx-a11y/anchor-is-valid */
import { useContext, useEffect, useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import logoImg from "../../assets/images/logofinal.jpeg";
import { AuthContext } from "../../common/context/auth-context";

const phoneNumber = "+233 20 957 4338";
const address = " No.5 Spintex RoadNext to Cassa";

const socialList = [
  {
    iconName: "icofont-facebook-messenger",
    siteLink: "#",
  },
  {
    iconName: "icofont-twitter",
    siteLink: "#",
  },
  {
    iconName: "icofont-vimeo",
    siteLink: "#",
  },
  {
    iconName: "icofont-skype",
    siteLink: "#",
  },
  {
    iconName: "icofont-rss-feed",
    siteLink: "#",
  },
];

const Header = () => {
  const [menuToggle, setMenuToggle] = useState(false);
  const [socialToggle, setSocialToggle] = useState(false);
  const [headerFixed, setHeaderFixed] = useState(false);
  const { auth, setAuth } = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setHeaderFixed(window.scrollY > 200);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleLogout = () => {
    setAuth({
      ...auth, // Spread the existing auth state
      user: null, // Set user to null
      authenticate: false, // Set authenticate to false
    });
    navigate("/login");
  };

  return (
    <header
      className={`header-section ${headerFixed ? "header-fixed fadeInUp" : ""}`}
    >
      <div className={`header-top ${socialToggle ? "open" : ""}`}>
        <div className="container">
          <div className="header-top-area flex justify-between items-center">
            <ul className="lab-ul left flex space-x-4">
              <li>
                <i className="icofont-ui-call"></i> <span>{phoneNumber}</span>
              </li>
              <li>
                <i className="icofont-location-pin"></i> {address}
              </li>
            </ul>
            <ul className="lab-ul social-icons flex space-x-4 items-center">
              <li>
                <p>Find us on:</p>
              </li>
              {socialList.map((val, i) => (
                <li key={i}>
                  <a className="text-emerald-500" href={val.siteLink}>
                    <i
                      style={{ color: "#26C976" }}
                      className={val.iconName}
                    ></i>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="header-bottom">
        <div className="container">
          <div className="header-wrapper flex justify-between items-center">
            {/* Logo */}
            <div className="hidden lg:block">
              <Link to="/">
                <img width={60} height={60} src={logoImg} alt="logo" />
              </Link>
            </div>
            {/* Menu */}
            <div className="menu-area">
              <div className="menu">
                <ul className={`lab-ul ${menuToggle ? "active" : ""}`}>
                  <li className="menu-item-has-children">
                    <a href="/" role="button">
                      Home
                    </a>
                    {auth.user?.role === "instructor" && (
                      <ul
                        style={{ backgroundColor: "#26C976", color: "#FFFFFF" }}
                        className="lab-ul dropdown-menu "
                      >
                        <li>
                          <NavLink
                            className="text-white"
                            to="/instructor-dashboard"
                          >
                            Admin
                          </NavLink>
                        </li>
                      </ul>
                    )}
                    {auth.user?.role === "teacher" && (
                      <ul
                        style={{ backgroundColor: "#26C976", color: "#FFFFFF" }}
                        className="lab-ul dropdown-menu "
                      >
                        <li>
                          <NavLink
                            className="text-white"
                            to="/teacher-dashbaord"
                          >
                            Dashboard
                          </NavLink>
                        </li>
                      </ul>
                    )}
                    {auth.user?.role === "student" && (
                      <ul
                        style={{ backgroundColor: "#26C976", color: "#FFFFFF" }}
                        className="lab-ul dropdown-menu "
                      >
                        <li>
                          <NavLink
                            className="text-white"
                            to="/student-dashbaord"
                          >
                            Dashboard
                          </NavLink>
                        </li>
                      </ul>
                    )}
                  </li>
                  <li className="menu-item-has-children">
                    <a href="/course" role="button">
                      Courses
                    </a>
                  </li>
                  <li className="menu-item-has-children">
                    <a href="#" role="button">
                      Who we are
                    </a>
                    <ul
                      style={{ backgroundColor: "#26C976", color: "#FFFFFF" }}
                      className="lab-ul dropdown-menu"
                    >
                      {/* <li>
                        <NavLink className="text-white" to="/about">
                          About
                        </NavLink>
                      </li> */}
                      <li>
                        <NavLink className="text-white" to="/team">
                          Team
                        </NavLink>
                      </li>
                      <li>
                        <NavLink className="text-white" to="/instructor">
                          Instructor
                        </NavLink>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <NavLink to="/contact">Contact</NavLink>
                  </li>
                </ul>
              </div>
              {auth?.authenticate === true ? (
                <Link
                  style={{
                    backgroundColor: "#26C976",
                    color: "#FFFFFF",
                    borderRadius: "10px",
                  }}
                  onClick={handleLogout}
                  to="/login"
                  className="signup"
                >
                  <i className="icofont-user"></i>{" "}
                  <span className="text-sm" style={{ color: "white" }}>
                    Logout
                  </span>
                </Link>
              ) : (
                <>
                  <Link to="/login">
                    <i
                      style={{ color: "#26C976" }}
                      className="icofont-user"
                    ></i>{" "}
                    <span style={{ color: "#26C976" }}>Login</span>
                  </Link>
                  <div className="h-8 w-[0.5px] border border-green-500 mx-2"></div>
                  <Link
                    style={{
                      backgroundColor: "#26C976",
                      color: "#FFFFFF",
                      borderRadius: "10px",
                    }}
                    to="/signup"
                    className="text-md p-2"
                  >
                    <i className="icofont-users"></i>{" "}
                    <span className="text-sm">Register</span>
                  </Link>
                </>
              )}
            </div>

            {/* Hamburger Icon */}
            <div
              className={`header-bar lg:hidden ml-auto ${
                menuToggle ? "active" : ""
              }`}
              onClick={() => setMenuToggle(!menuToggle)}
            >
              <span></span>
              <span></span>
              <span></span>
            </div>

            {/* Social Info Toggle */}
            <div
              className="ellepsis-bar lg:hidden"
              onClick={() => setSocialToggle(!socialToggle)}
            >
              <i className="icofont-info-square hidden lg:block"></i>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
