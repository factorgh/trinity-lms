import {
  BookOutlined,
  FileTextOutlined,
  ProfileOutlined,
} from "@ant-design/icons";
import { Badge, Button, Select, Table, Tabs } from "antd";
import React, { useContext, useEffect, useState } from "react";
import { FaCertificate } from "react-icons/fa6";
import { MdLogout } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import StudentEnrolledCourse from "../common/components/student-view/studentCourses";
import { AuthContext } from "../common/context/auth-context";
import { fetchStudentBoughtCoursesService } from "../common/services";
import useFetchStudentQuizzes from "../common/hooks/useFetchStudentQuizzes";
import axiosInstance from "../common/api/axiosInstance";

const { TabPane } = Tabs;
const { Option } = Select;

const StudentDashboard = () => {
  const [selectedYear, setSelectedYear] = useState("2024");
  const { auth } = useContext(AuthContext);
  const { data: stQuiz } = useFetchStudentQuizzes(auth?.user?._id);
  const [studentQuiz, setStudentQuiz] = useState([]);
  console.log(stQuiz);

  const navigate = useNavigate();

  const [studentBoughtCoursesList, setStudentBoughtCoursesList] = useState([]);

  useEffect(() => {
    setStudentQuiz(stQuiz);
  }, [stQuiz]);
  useEffect(() => {
    async function fetchStudentBoughtCourses() {
      const response = await fetchStudentBoughtCoursesService(auth?.user?._id);
      if (response?.data) {
        console.log(
          "--------------------student enrolled courses---------------------"
        );
        console.log(response.data);
        setStudentBoughtCoursesList(response?.data.courses);
      }
    }
    fetchStudentBoughtCourses();
  }, [auth?.user?._id, setStudentBoughtCoursesList]);

  function handleLogout() {
    sessionStorage.clear();
    window.location.href = "/";
  }

  // Handle cerificate doqnload
  const downloadCertificate = async (userDetails, course) => {
    try {
      console.log(userDetails, course);

      const response = await axiosInstance.post(
        `/certificate/generate-certificate/`,
        { userDetails, course },
        { responseType: "blob" } // 👈 This tells Axios to return a Blob
      );

      // Create a Blob URL
      const url = window.URL.createObjectURL(response.data);
      const a = document.createElement("a");
      a.href = url;
      a.download = "Certificate.png";
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);

      // Revoke the blob URL to free memory
      window.URL.revokeObjectURL(url);
    } catch (error) {
      console.error("Error downloading certificate:", error);
    }
  };

  // Dummy grades data
  const gradesColumns = [
    { title: "Course", dataIndex: "course", key: "course" },
    { title: "Year", dataIndex: "year", key: "year" },
    { title: "Grade", dataIndex: "grade", key: "grade" },
  ];
  const gradesData = [
    { course: "web development", year: "2024", grade: "40/100" },
    { course: "web development", year: "2023", grade: "30/70" },
  ];

  // Dummy quizzes data
  const quizzesColumns = [
    { title: "Course Id", dataIndex: "courseId", key: "courseId" },
    { title: "Course", dataIndex: "courseTitle", key: "courseTitle" },

    {
      title: "Status",
      dataIndex: "status",
      key: "status",
      render: (status) => (
        <Badge
          status={status === "Pending" ? "warning" : "success"}
          text={status}
        />
      ),
    },
    {
      title: "Actions",
      dataIndex: "actions",
      key: "actions",
      render: (status, record) => (
        <Button
          type="primary"
          onClick={() => {
            navigate("/quiz");
          }}
        >
          Start Quiz
        </Button>
      ),
    },
  ];

  const certificates = [
    { title: "Course Id", dataIndex: "courseId", key: "courseId" },
    { title: "Course", dataIndex: "courseTitle", key: "courseTitle" },

    {
      title: "Action",
      dataIndex: "courseTitle",
      key: "courseAction",
      render: (record) => (
        <Button
          type="primary"
          onClick={() => downloadCertificate(auth?.user.userName, record)}
        >
          Generate
        </Button>
      ),
    },
  ];

  return (
    <div className="container mx-auto my-10 gap-6 min-h-screen bg-white shadow-lg p-5">
      <div className="flex items-center justify-between ">
        <h1 className="text-2xl font-bold mb-4">Student Dashboard</h1>
        <button
          onClick={handleLogout}
          className=" flex items-center gap-2 w-[130px] px-3 py-2 bg-red-600 text-white rounded-md"
        >
          <span>Logout</span>
          <MdLogout className="text-white text-sm" />
        </button>
      </div>

      <Tabs defaultActiveKey="1" type="card">
        {/* Enrolled Courses Tab */}
        <TabPane
          tab={
            <span>
              <BookOutlined /> Enrolled Courses
            </span>
          }
          key="1"
        >
          {studentBoughtCoursesList.length === 0 && (
            <div className="flex items-center justify-center">
              <p className="text-2xl ">No enrolled courses</p>
            </div>
          )}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {studentBoughtCoursesList?.map((vale, index) => (
              <StudentEnrolledCourse key={index} val={vale.courseId} />
            ))}
          </div>
        </TabPane>

        {/* Grades Tab */}
        <TabPane
          tab={
            <span>
              <ProfileOutlined /> Grades
            </span>
          }
          key="2"
        >
          <div className="flex justify-end mb-4">
            <Select
              value={selectedYear}
              onChange={(value) => setSelectedYear(value)}
            >
              <Option value="2024">2024</Option>
              <Option value="2023">2023</Option>
              <Option value="2022">2022</Option>
            </Select>
          </div>
          <Table
            columns={gradesColumns}
            dataSource={gradesData.filter((g) => g.year === selectedYear)}
            rowKey={(record) => record.course + record.year}
          />
        </TabPane>

        {/* Quizzes Tab */}
        <TabPane
          tab={
            <span>
              <FileTextOutlined /> Quizzes
            </span>
          }
          key="3"
        >
          <Table
            columns={quizzesColumns}
            dataSource={studentQuiz}
            rowKey="quiz"
          />
        </TabPane>

        {/* Certificates Tab */}
        <TabPane
          tab={
            <span className="flex items-center gap-2">
              <FaCertificate /> Certificates
            </span>
          }
          key="4"
        >
          <Table
            columns={certificates}
            dataSource={studentQuiz}
            rowKey="quiz"
          />
        </TabPane>
      </Tabs>
    </div>
  );
};

export default StudentDashboard;
