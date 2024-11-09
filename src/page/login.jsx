import { Spin } from "antd";
import { Fragment, useContext, useState } from "react";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import backgroundImg from "../../src/assets/images/home.jpg"; // Import your background image
import logoImg from "../../src/assets/images/logofinal.jpeg"; // Import your logo
import { AuthContext } from "../common/context/auth-context";
import { loginService } from "../common/services";
// Importing React Icons
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaPinterestP,
  FaTwitter,
} from "react-icons/fa";

// Define social media login options
const socialList = [
  { link: "#", icon: <FaFacebookF className="text-blue-600" /> },
  { link: "#", icon: <FaTwitter className="text-blue-400" /> },
  { link: "#", icon: <FaLinkedinIn className="text-blue-700" /> },
  { link: "#", icon: <FaInstagram className="text-pink-600" /> },
  { link: "#", icon: <FaPinterestP className="text-red-600" /> },
];

const LoginPage = () => {
  const [userEmail, setUserEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false); // Loading state
  const { setAuth, auth } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true); // Set loading to true

    try {
      const data = await loginService({ userEmail, password });
      if (data.success) {
        sessionStorage.setItem(
          "accessToken",
          JSON.stringify(data.data.accessToken)
        );
        setAuth({ authenticate: true, user: data.data.user });
        toast.success("Login successful");
        navigate("/");
      } else {
        setAuth({ authenticate: false, user: null });
        toast.error("Login failed");
      }
    } catch (error) {
      toast.error("An error occurred while logging in");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Fragment>
      <div className="flex h-screen bg-gradient-to-r from-blue-500 via-green-500 to-purple-500">
        {/* Left side: Login Form */}
        <div className="w-full md:w-1/2 flex items-center justify-center bg-white p-8 bg-gradient-to-t from-slate-60">
          <form className="w-full max-w-sm" onSubmit={handleSubmit}>
            <div className="flex items-center justify-center mb-10">
              <img width={80} height={80} src={logoImg} alt="logo" />
            </div>
            <div className="mb-4">
              {/* Wrapper to position the prefix and input together */}
              <div className="flex items-center border border-gray-300 rounded-md">
                {/* Prefix container */}
                <span className="bg-gray-100 text-gray-600 p-3 rounded-l-md font-medium">
                  GH-
                </span>

                {/* Input field */}
                <input
                  className="w-full p-3 pl-6 rounded-r-md focus:outline-none focus:ring-2 focus:ring-green-500"
                  type="text"
                  name="ghanaCardNumber"
                  placeholder="Enter your Ghana Card Number *"
                  value={userEmail}
                  onChange={(e) => setUserEmail(e.target.value)}
                />
              </div>
            </div>

            <div className="mb-6">
              <input
                className="w-full p-3 border border-gray-300 rounded-md"
                type="password"
                name="password"
                placeholder="Password *"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="flex justify-start items-start mb-6">
              {/* <div className="flex items-center ">
                <input type="checkbox" name="remember" id="remember" />
                <label htmlFor="remember" className="ml-2 text-sm">
                  Remember me
                </label>
              </div> */}
              {/* <Link to="/forgetpass" className="text-sm text-blue-600">
                Forgot Password?
              </Link> */}
            </div>
            <div className="mb-6 text-center">
              {loading ? (
                <Spin />
              ) : (
                <button
                  type="submit"
                  className="w-full p-3 bg-green-600 text-white rounded-md"
                  disabled={loading}
                >
                  Submit Now
                </button>
              )}
            </div>
            <div className="text-center">
              <p className="text-sm">
                Don’t Have an Account?{" "}
                <Link to="/signup" className="text-blue-600 ml-3">
                  Sign Up
                </Link>
              </p>
            </div>
            {/* Social login */}
            {/* <div className="mt-6 text-center">
              <span className="text-sm text-gray-600">Or</span>
              <div className="mt-4 flex justify-center space-x-4">
                {socialList.map((social, i) => (
                  <a
                    href={social.link}
                    className="text-2xl hover:text-gray-600"
                    key={i}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div> */}
          </form>
        </div>

        {/* Right side: Image with Gradient Overlay */}
        <div
          className="hidden md:block w-1/2 bg-cover bg-center relative"
          style={{
            backgroundImage: `url(${backgroundImg})`, // Use imported background image here
          }}
        >
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black opacity-80"></div>
        </div>
      </div>
    </Fragment>
  );
};

export default LoginPage;
