import { Fragment, useContext, useState } from "react";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";

import { AuthContext } from "../common/context/auth-context";
import Footer from "../component/layout/footer";
import Header from "../component/layout/header";
import PageHeader from "../component/layout/pageheader";

const title = "Register Now";
const socialTitle = "Register With Social Media";
const btnText = "Get Started Now";

let socialList = [
  { link: "#", iconName: "icofont-facebook", className: "facebook" },
  { link: "#", iconName: "icofont-twitter", className: "twitter" },
  { link: "#", iconName: "icofont-linkedin", className: "linkedin" },
  { link: "#", iconName: "icofont-instagram", className: "instagram" },
  { link: "#", iconName: "icofont-pinterest", className: "pinterest" },
];

const SignupPage = () => {
  const [userEmail, setUserEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userName, setUserName] = useState("");
  const { handleRegisterUser } = useContext(AuthContext);

  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log(
      "Email:",
      userEmail,
      "Password:",
      password,
      "Username:",
      userName
    );

    try {
      await handleRegisterUser({
        userName,
        userEmail,
        password,
      });

      // Show success message
      toast.success("Registration successful");
    } catch (error) {
      console.log(error); // Log error response for debugging
      toast.error(error.response?.data?.message || "Failed to register");
    }
  };

  return (
    <Fragment>
      <Header />
      <PageHeader title={"Register Now"} curPage={"Sign Up"} />
      <div className="login-section padding-tb section-bg">
        <div className="container">
          <div className="account-wrapper">
            <h3 className="title">{title}</h3>
            <form onSubmit={handleSubmit} className="account-form">
              <div className="form-group">
                <input
                  type="text"
                  name="userName"
                  placeholder="User Name"
                  value={userName}
                  onChange={(e) => setUserName(e.target.value)}
                />
              </div>
              <div className="form-group">
                <input
                  type="email"
                  name="userEmail"
                  placeholder="Email"
                  value={userEmail}
                  onChange={(e) => setUserEmail(e.target.value)}
                />
              </div>
              <div className="form-group">
                <input
                  type="password"
                  name="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <div className="form-group">
                <button className="lab-btn">
                  <span>{btnText}</span>
                </button>
              </div>
            </form>
            <div className="account-bottom">
              <span className="d-block cate pt-10">
                Are you a member? <Link to="/login">Login</Link>
              </span>
              <span className="or">
                <span>or</span>
              </span>
              <h5 className="subtitle">{socialTitle}</h5>
              <ul className="lab-ul social-icons justify-content-center">
                {socialList.map((val, i) => (
                  <li key={i}>
                    <a href={val.link} className={val.className}>
                      <i className={val.iconName}></i>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </Fragment>
  );
};

export default SignupPage;
