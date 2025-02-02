// import { Spin } from "antd";
// import { Fragment, useContext, useState } from "react";
// import toast from "react-hot-toast";
// import { Link, useNavigate } from "react-router-dom";
// import backgroundImg from "../../src/assets/images/home.jpg"; // Import your background image
// import logoImg from "../../src/assets/images/logofinal.jpeg"; // Import your logo image
// import { AuthContext } from "../common/context/auth-context";
// import { registerService } from "../common/services";

// // Define social media login options

// const SignupPage = () => {
//   const [userEmail, setUserEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [userName, setUserName] = useState("");
//   const [loading, setLoading] = useState(false); // Loading state

//   const { setAuth } = useContext(AuthContext);
//   const navigate = useNavigate();

//   async function handleSubmit(event) {
//     event.preventDefault();
//     setLoading(true); // Set loading to true

//     try {
//       const data = await registerService({
//         userName,
//         userEmail,
//         password,
//       });

//       if (data.success) {
//         sessionStorage.setItem(
//           "accessToken",
//           JSON.stringify(data.data.accessToken)
//         );
//         setAuth({
//           authenticate: true,
//           user: data.data.user,
//         });
//         toast.success("Registration successful");
//         navigate("/login");
//       } else {
//         setAuth({
//           authenticate: false,
//           user: null,
//         });
//         toast.error("Registration failed");
//       }
//     } catch (error) {
//       console.error(error);
//       toast.error("Registration Failed");
//     } finally {
//       setLoading(false); // Set loading back to false
//     }
//   }

//   return (
//     <Fragment>
//       <div className="flex h-screen bg-gradient-to-r from-blue-500 via-green-500 to-purple-500">
//         {/* Left side: Signup Form */}
//         <div className="w-full md:w-1/2 flex items-center justify-center bg-white p-8  bg-gradient-to-t from-slate-60">
//           <form className="w-full max-w-sm" onSubmit={handleSubmit}>
//             <div className="flex items-center justify-center mb-10">
//               <img width={80} height={80} src={logoImg} alt="logo" />
//             </div>

//             <div className="mb-4">
//               {/* Wrapper to position the prefix and input together */}
//               <div className="flex items-center border border-gray-300 rounded-md">
//                 {/* Prefix container */}
//                 <span className="bg-gray-100 text-gray-600 p-3 rounded-l-md font-medium">
//                   GH-
//                 </span>

//                 {/* Input field */}
//                 <input
//                   className="w-full p-3 pl-6 rounded-r-md focus:outline-none focus:ring-2 focus:ring-green-500"
//                   type="text"
//                   name="ghanaCardNumber"
//                   placeholder="Enter your Ghana Card Number *"
//                   value={userName}
//                   onChange={(e) => setUserName(e.target.value)}
//                 />
//               </div>
//             </div>
//             <div className="mb-4">
//               <input
//                 className="w-full p-3 border border-gray-300 rounded-md"
//                 type="email"
//                 name="userEmail"
//                 placeholder="Email"
//                 value={userEmail}
//                 onChange={(e) => setUserEmail(e.target.value)}
//               />
//             </div>
//             <div className="mb-6">
//               <input
//                 className="w-full p-3 border border-gray-300 rounded-md"
//                 type="password"
//                 name="password"
//                 placeholder="Password"
//                 value={password}
//                 onChange={(e) => setPassword(e.target.value)}
//               />
//             </div>
//             <div className="mb-6 text-center">
//               {loading ? (
//                 <Spin />
//               ) : (
//                 <button
//                   type="submit"
//                   className="w-full p-3 bg-green-600 text-white rounded-md"
//                   disabled={loading}
//                 >
//                   Get Started Now
//                 </button>
//               )}
//             </div>
//             <div className="text-center">
//               <p className="text-sm">
//                 Already have an account?{" "}
//                 <Link to="/login" className="text-blue-600 ml-3">
//                   Login
//                 </Link>
//               </p>
//             </div>
//             {/* Social login */}
//             {/* <div className="mt-6 text-center">
//               <span className="text-sm text-gray-600">Or</span>
//               <div className="mt-4 flex justify-center space-x-4">
//                 {socialList.map((social, i) => (
//                   <a
//                     href={social.link}
//                     className="text-2xl hover:text-gray-600"
//                     key={i}
//                   >
//                     {social.icon}
//                   </a>
//                 ))}
//               </div>
//             </div> */}
//           </form>
//         </div>

//         {/* Right side: Background Image with Gradient Overlay */}
//         <div
//           className="hidden md:block w-1/2 bg-cover bg-center relative"
//           style={{
//             backgroundImage: `url(${backgroundImg})`, // Use the imported background image here
//           }}
//         >
//           {/* Gradient Overlay */}
//           <div className="absolute inset-0 bg-gradient-to-t from-black opacity-80"></div>
//         </div>
//       </div>
//     </Fragment>
//   );
// };

// export default SignupPage;
import { Button, Col, DatePicker, Form, Input, Radio, Row, Select } from "antd";
import { useContext, useEffect, useState } from "react";
import toast from "react-hot-toast";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa6";
import { Link, useNavigate } from "react-router-dom";
import logoImg from "../../src/assets/images/logofinal.jpeg";
import bgImg from "../../src/assets/images/main.jpg";
import axiosInstance from "../common/api/axiosInstance";
import { AuthContext } from "../common/context/auth-context";
import { registerService } from "../common/services";
const { Option } = Select;

export default function SignUpPage() {
  const [role, setRole] = useState("Student");
  const [loading, setLoading] = useState(false);
  const [schools, setSchools] = useState([]);
  const { setAuth } = useContext(AuthContext);
  const navigate = useNavigate();
  const handleRoleChange = (e) => setRole(e.target.value);

  const onFinish = async (values) => {
    setLoading(true); // Set loading to true
    console.log(values, role);

    try {
      const data = await registerService({
        ...values,
        role: role,
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
  };

  const getAllSchools = async () => {
    try {
      const { data } = await axiosInstance.get("/schools");
      setSchools(data.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAllSchools();
  }, []);
  return (
    <div className="grid grid-cols-1 md:grid-cols-9 min-h-screen">
      {/* Sidebar */}
      <div className="hidden md:flex flex-col justify-between items-center p-5 bg-slate-800">
        <Link to="/">
          <img
            src={logoImg}
            alt="Logo"
            width={60}
            height={60}
            className="cursor-pointer"
          />
        </Link>
        <div className="flex flex-col items-center gap-6">
          <FaFacebook className="text-3xl text-white" />
          <FaInstagram className="text-3xl text-white" />
          <FaTwitter className="text-3xl text-white" />
        </div>
      </div>

      {/* Form Section */}
      <div
        style={{ backgroundImage: `url(${bgImg})` }}
        className="col-span-8 flex justify-center items-center p-4 bg-gray-100 "
      >
        <div className="w-full max-w-[90%] sm:max-w-[80%] md:max-w-4xl bg-slate-50 rounded-lg shadow-lg p-6">
          <Radio.Group
            className="mb-6 flex justify-center"
            value={role}
            onChange={handleRoleChange}
          >
            <Radio.Button value="student" className="mx-2">
              Student
            </Radio.Button>
            <Radio.Button value="teacher" className="mx-2">
              Teacher
            </Radio.Button>
          </Radio.Group>

          <Form layout="vertical" onFinish={onFinish} initialValues={{ role }}>
            <Row gutter={[16, 16]}>
              <Col xs={24} sm={12}>
                <Form.Item
                  label="Full Name"
                  name="fullName"
                  rules={[
                    { required: true, message: "Please enter your full name!" },
                  ]}
                >
                  <Input placeholder="John Doe" />
                </Form.Item>
              </Col>
              <Col xs={24} sm={12}>
                <Form.Item
                  label="Date of Birth"
                  name="dateOfBirth"
                  rules={[
                    {
                      required: true,
                      message: "Please select your date of birth!",
                    },
                  ]}
                >
                  <DatePicker className="w-full" />
                </Form.Item>
              </Col>
            </Row>

            <Row gutter={[16, 16]}>
              <Col xs={24} sm={12}>
                <Form.Item
                  label="Gender"
                  name="gender"
                  rules={[
                    { required: true, message: "Please select your gender!" },
                  ]}
                >
                  <Select placeholder="Select Gender">
                    <Option value="Male">Male</Option>
                    <Option value="Female">Female</Option>
                    <Option value="Other">Other</Option>
                  </Select>
                </Form.Item>
              </Col>
              <Col xs={24} sm={12}>
                <Form.Item
                  label="Email"
                  name="userEmail"
                  rules={[
                    { required: true, message: "Please enter your email!" },
                    { type: "email", message: "Please enter a valid email!" },
                  ]}
                >
                  <Input type="email" placeholder="example@gmail.com" />
                </Form.Item>
              </Col>
            </Row>

            <Row gutter={[16, 16]}>
              <Col xs={24} sm={12}>
                <Form.Item
                  label="Username"
                  name="userName"
                  rules={[
                    { required: true, message: "Please enter a username!" },
                  ]}
                >
                  <Input placeholder="yourusername" />
                </Form.Item>
              </Col>
              <Col xs={24} sm={12}>
                <Form.Item
                  label="Password"
                  name="password"
                  rules={[
                    { required: true, message: "Please enter your password!" },
                  ]}
                >
                  <Input.Password placeholder="********" />
                </Form.Item>
              </Col>
            </Row>

            {role === "student" && (
              <Row gutter={[16, 16]}>
                <Col xs={24} sm={12}>
                  <Form.Item
                    label="School"
                    name="school"
                    rules={[
                      { required: true, message: "Please select your school!" },
                    ]}
                  >
                    <Select placeholder="Select School">
                      {schools.map((school) => (
                        <Option key={school._id} value={school._id}>
                          {school.name}
                        </Option>
                      ))}
                    </Select>
                  </Form.Item>
                </Col>
                <Col xs={24} sm={12}>
                  <Form.Item
                    label="Grade Level"
                    name="gradeLevel"
                    rules={[
                      {
                        required: true,
                        message: "Please select your grade level!",
                      },
                    ]}
                  >
                    <Select placeholder="Select Grade">
                      <Option value="Year 1">Year 1</Option>
                      <Option value="Year 2">Year 2</Option>
                      <Option value="Year 3">Year 3</Option>
                    </Select>
                  </Form.Item>
                </Col>
              </Row>
            )}

            {role === "teacher" && (
              <>
                <Row gutter={[16, 16]}>
                  <Col xs={24} sm={12}>
                    <Form.Item
                      label="Academic Qualifications"
                      name="academicQualifications"
                      rules={[
                        {
                          required: true,
                          message: "Please enter your academic qualifications!",
                        },
                      ]}
                    >
                      <Input.TextArea
                        rows={2}
                        placeholder="e.g., Bachelor's in Science"
                      />
                    </Form.Item>
                  </Col>
                  <Col xs={24} sm={12}>
                    <Form.Item
                      label="Teaching Experience (Years)"
                      name="teachingExperience"
                      rules={[
                        {
                          required: true,
                          message: "Please enter your experience!",
                        },
                      ]}
                    >
                      <Input type="number" placeholder="e.g., 5" />
                    </Form.Item>
                  </Col>
                </Row>

                <Row>
                  <Col xs={24} sm={12}>
                    <Form.Item
                      label="School"
                      name="school"
                      rules={[
                        {
                          required: true,
                          message: "Please enter your school!",
                        },
                      ]}
                    >
                      <Input placeholder="School Name" />
                    </Form.Item>
                  </Col>
                </Row>
              </>
            )}

            <Form.Item className="text-center">
              <Button
                loading={loading}
                type="primary"
                htmlType="submit"
                className="w-full bg-slate-400"
              >
                Register
              </Button>
            </Form.Item>
          </Form>

          <div className="text-center mt-4">
            <span>Already have an account?</span>
            <Link to="/login" className="text-blue-500 hover:underline ml-1">
              Login
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
