/* eslint-disable jsx-a11y/anchor-is-valid */
import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import logoImg from "../../assets/images/logofinal.jpeg";

const phoneNumber = "+800-123-4567 6587";
const address = "Beverley, New York 224 USA";

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

  useEffect(() => {
    const handleScroll = () => {
      setHeaderFixed(window.scrollY > 200);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`header-section ${headerFixed ? "header-fixed fadeInUp" : ""}`}
    >
      <div className={`header-top ${socialToggle ? "open" : ""}`}>
        <div className="container">
          <div className="header-top-area">
            <ul className="lab-ul left">
              <li>
                <i className="icofont-ui-call"></i> <span>{phoneNumber}</span>
              </li>
              <li>
                <i className="icofont-location-pin"></i> {address}
              </li>
            </ul>
            <ul className="lab-ul social-icons d-flex align-items-center">
              <li>
                <p>Find us on:</p>
              </li>
              {socialList.map((val, i) => (
                <li key={i}>
                  <a href={val.siteLink}>
                    <i className={val.iconName}></i>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <div className="header-bottom">
        <div className="container">
          <div className="header-wrapper">
            <div className="logo">
              <Link to="/">
                <img width={60} height={60} src={logoImg} alt="logo" />
              </Link>
            </div>
            <div className="menu-area">
              <div className="menu">
                <ul className={`lab-ul ${menuToggle ? "active" : ""}`}>
                  <li className="menu-item-has-children">
                    <a href="/" role="button">
                      Home
                    </a>
                    <ul className="lab-ul dropdown-menu">
                      {/* Add NavLink items here */}
                      <li>
                        <NavLink to="/instructor-dashboard">Course</NavLink>
                      </li>
                    </ul>
                  </li>
                  <li className="menu-item-has-children">
                    <a href="#" role="button">
                      Courses
                    </a>
                    <ul className="lab-ul dropdown-menu">
                      <li>
                        <NavLink to="/course">Course</NavLink>
                      </li>
                      <li>
                        <NavLink to="/course-single">Course Details</NavLink>
                      </li>
                      <li>
                        <NavLink to="/course-view">Course View</NavLink>
                      </li>
                    </ul>
                  </li>
                  {/* <li className="menu-item-has-children">
                    <a href="#" role="button">
                      Blog
                    </a>
                    <ul className="lab-ul dropdown-menu">
                      <li>
                        <NavLink to="/blog">Blog Grid</NavLink>
                      </li>
                      <li>
                        <NavLink to="/blog-2">Blog Style 2</NavLink>
                      </li>
                      <li>
                        <NavLink to="/blog-3">Blog Style 3</NavLink>
                      </li>
                      <li>
                        <NavLink to="/blog-single">Blog Single</NavLink>
                      </li>
                    </ul>
                  </li> */}
                  <li className="menu-item-has-children">
                    <a href="#" role="button">
                      Who we are
                    </a>
                    <ul className="lab-ul dropdown-menu">
                      <li>
                        <NavLink to="/about">About</NavLink>
                      </li>
                      <li>
                        <NavLink to="/team">Team</NavLink>
                      </li>
                      <li>
                        <NavLink to="/instructor">Instructor</NavLink>
                      </li>
                      {/* <li>
                        <NavLink to="/shop">Shop Page</NavLink>
                      </li> */}
                      {/* <li>
                        <NavLink to="/shop-single">Shop Details Page</NavLink>
                      </li> */}
                      {/* <li>
                        <NavLink to="/cart-page">Shop Cart Page</NavLink>
                      </li> */}
                      {/* <li>
                        <NavLink to="/search-page">Search Page</NavLink>
                      </li> */}
                      {/* <li>
                        <NavLink to="/search-none">Search None</NavLink>
                      </li> */}
                      {/* <li>
                        <NavLink to="/404">404</NavLink>
                      </li> */}
                    </ul>
                  </li>
                  <li>
                    <NavLink to="/contact">Contact</NavLink>
                  </li>
                </ul>
              </div>
              <Link to="/login" className="login">
                <i className="icofont-user"></i> <span>LOG IN</span>
              </Link>
              <Link to="/signup" className="signup">
                <i className="icofont-users"></i> <span>SIGN UP</span>
              </Link>
              <div
                className={`header-bar d-lg-none ${menuToggle ? "active" : ""}`}
                onClick={() => setMenuToggle(!menuToggle)}
              >
                <span></span>
                <span></span>
                <span></span>
              </div>
              <div
                className="ellepsis-bar d-lg-none"
                onClick={() => setSocialToggle(!socialToggle)}
              >
                <i className="icofont-info-square"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
