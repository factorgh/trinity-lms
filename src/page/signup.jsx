import { Spin } from "antd";
import { Fragment, useContext, useState } from "react";
import toast from "react-hot-toast";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaPinterestP,
  FaTwitter,
} from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import backgroundImg from "../../src/assets/images/home.jpg"; // Import your background image
import logoImg from "../../src/assets/images/logofinal.jpeg"; // Import your logo image
import { AuthContext } from "../common/context/auth-context";
import { registerService } from "../common/services";

// Define social media login options
const socialList = [
  { link: "#", icon: <FaFacebookF className="text-blue-600" /> },
  { link: "#", icon: <FaTwitter className="text-blue-400" /> },
  { link: "#", icon: <FaLinkedinIn className="text-blue-700" /> },
  { link: "#", icon: <FaInstagram className="text-pink-600" /> },
  { link: "#", icon: <FaPinterestP className="text-red-600" /> },
];

const SignupPage = () => {
  const [userEmail, setUserEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userName, setUserName] = useState("");
  const [loading, setLoading] = useState(false); // Loading state

  const { setAuth } = useContext(AuthContext);
  const navigate = useNavigate();

  async function handleSubmit(event) {
    event.preventDefault();
    setLoading(true); // Set loading to true

    try {
      const data = await registerService({
        userName,
        userEmail,
        password,
      });

      if (data.success) {
        sessionStorage.setItem(
          "accessToken",
          JSON.stringify(data.data.accessToken)
        );
        setAuth({
          authenticate: true,
          user: data.data.user,
        });
        toast.success("Registration successful");
        navigate("/login");
      } else {
        setAuth({
          authenticate: false,
          user: null,
        });
        toast.error("Registration failed");
      }
    } catch (error) {
      console.error(error);
      toast.error("Registration Failed");
    } finally {
      setLoading(false); // Set loading back to false
    }
  }

  return (
    <Fragment>
      <div className="flex h-screen bg-gradient-to-r from-blue-500 via-green-500 to-purple-500">
        {/* Left side: Signup Form */}
        <div className="w-full md:w-1/2 flex items-center justify-center bg-white p-8  bg-gradient-to-t from-slate-50">
          <form className="w-full max-w-sm" onSubmit={handleSubmit}>
            <div className="flex items-center justify-center mb-10">
              <img width={80} height={80} src={logoImg} alt="logo" />
            </div>

            <div className="mb-4">
              <input
                className="w-full p-3 border border-gray-300 rounded-md"
                type="text"
                name="Ghana Card Number"
                placeholder="Ghana Card Number"
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
              />
            </div>
            <div className="mb-4">
              <input
                className="w-full p-3 border border-gray-300 rounded-md"
                type="email"
                name="userEmail"
                placeholder="Email"
                value={userEmail}
                onChange={(e) => setUserEmail(e.target.value)}
              />
            </div>
            <div className="mb-6">
              <input
                className="w-full p-3 border border-gray-300 rounded-md"
                type="password"
                name="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
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
                  Get Started Now
                </button>
              )}
            </div>
            <div className="text-center">
              <p className="text-sm">
                Already have an account?{" "}
                <Link to="/login" className="text-blue-600 ml-3">
                  Login
                </Link>
              </p>
            </div>
            {/* Social login */}
            <div className="mt-6 text-center">
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
            </div>
          </form>
        </div>

        {/* Right side: Background Image with Gradient Overlay */}
        <div
          className="hidden md:block w-1/2 bg-cover bg-center relative"
          style={{
            backgroundImage: `url(${backgroundImg})`, // Use the imported background image here
          }}
        >
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black opacity-80"></div>
        </div>
      </div>
    </Fragment>
  );
};

export default SignupPage;
