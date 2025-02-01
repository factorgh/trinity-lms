/* eslint-disable jsx-a11y/anchor-is-valid */

import { Button, Checkbox, Form, Input } from "antd";
import { useContext, useState } from "react";
import toast from "react-hot-toast";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa6";
import { Link, useNavigate } from "react-router-dom";
import { default as logoImg } from "../../src/assets/images/logofinal.jpeg";

import bgImg from "../../src/assets/images/main.jpg";
import { AuthContext } from "../common/context/auth-context";
import { loginService } from "../common/services";

export default function LoginPage() {
  const [loading, setLoading] = useState(false); // Loading state
  const { setAuth } = useContext(AuthContext);
  const navigate = useNavigate();

  const onFinish = async (values) => {
    setLoading(true);
    const password = values.password;
    const userEmail = values.email;

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
    <div className="flex flex-col md:grid md:grid-cols-8 min-h-screen">
      {/* Sidebar (Hidden on Small Screens) */}
      <div className="hidden md:flex flex-col justify-between items-center p-5 bg-slate-800 col-span-1">
        <div className="flex flex-col items-center">
          <Link to="/">
            <img
              src={logoImg}
              alt="Logo"
              width={60}
              height={60}
              className=" mt-5 cursor-pointer"
            />
          </Link>
        </div>
        <div className="flex flex-col items-center gap-10">
          <FaFacebook className="text-3xl text-white" />
          <FaInstagram className="text-3xl text-white" />
          <FaTwitter className="text-3xl text-white" />
        </div>
      </div>

      {/* Login Form */}
      <div
        className="flex justify-center items-center w-full min-h-screen bg-gray-100 p-4 md:col-span-7 bg-center bg-cover"
        style={{ backgroundImage: `url(${bgImg})` }}
      >
        <div className="w-full max-w-md bg-white rounded-lg shadow-lg p-6">
          <h1 className="text-xl font-thin text-center mb-4 p-3">
            Welcome back
          </h1>

          <Form layout="vertical" onFinish={onFinish} autoComplete="off">
            {/* Email/Username Field */}
            <Form.Item rules={[{ required: true }]} label="Email" name="email">
              <Input placeholder="Enter your email" />
            </Form.Item>

            {/* Password Field */}
            <Form.Item
              rules={[{ required: true }]}
              label="Password"
              name="password"
            >
              <Input.Password placeholder="Enter your password" />
            </Form.Item>

            {/* Remember Me & Forgot Password */}
            <div className="flex justify-between items-center mb-4">
              <Form.Item name="remember" valuePropName="checked" noStyle>
                <Checkbox>Remember me</Checkbox>
              </Form.Item>
              <a href="#" className="text-blue-500 hover:underline">
                Forgot password?
              </a>
            </div>

            {/* Login Button */}
            <Form.Item>
              <Button
                loading={loading}
                type="primary"
                htmlType="submit"
                className="w-full bg-slate-400"
              >
                Login
              </Button>
            </Form.Item>
          </Form>

          {/* Register Prompt */}
          <div className="text-center mt-4">
            <span>Don&apos;t have an account?</span>
            <a href="/signup" className="text-blue-500 hover:underline ml-1">
              Register
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
