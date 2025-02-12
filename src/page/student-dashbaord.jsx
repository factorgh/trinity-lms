import {
  BookOutlined,
  FileTextOutlined,
  ProfileOutlined,
} from "@ant-design/icons";
import { Badge, Button, Modal, Select, Table, Tabs } from "antd";
import React, { useContext, useEffect, useState } from "react";
import { FaCertificate } from "react-icons/fa6";
import { MdLogout } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import Quiz from "../common/components/quiz/components/Quiz";
import StudentEnrolledCourse from "../common/components/student-view/studentCourses";
import { AuthContext } from "../common/context/auth-context";
import { fetchStudentBoughtCoursesService } from "../common/services";

const { TabPane } = Tabs;
const { Option } = Select;

const StudentDashboard = () => {
  const [selectedYear, setSelectedYear] = useState("2024");
  const [showQuiz, setShowQuiz] = useState(false); // State for controlling quiz visibility
  const [selectedQuiz, setSelectedQuiz] = useState(null);
  const navigate = useNavigate();

  const { auth } = useContext(AuthContext);
  const { studentBoughtCoursesList, setStudentBoughtCoursesList } = useState(
    []
  );

  useEffect(() => {
    async function fetchStudentBoughtCourses() {
      const response = await fetchStudentBoughtCoursesService(auth?.user?._id);
      if (response?.data) {
        setStudentBoughtCoursesList(response?.data);
      }
    }
    fetchStudentBoughtCourses();
  }, [auth?.user?._id, setStudentBoughtCoursesList]);

  function handleLogout() {
    sessionStorage.clear();
    window.location.href = "/";
  }

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
    { title: "Quiz", dataIndex: "quiz", key: "quiz" },
    { title: "Course", dataIndex: "course", key: "course" },
    { title: "Due Date", dataIndex: "dueDate", key: "dueDate" },
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
            // setSelectedQuiz(record); // Set selected quiz data
            // setShowQuiz(true); // Show quiz drawer
          }}
        >
          Start Quiz
        </Button>
      ),
    },
  ];

  const certificates = [
    { title: "Course", dataIndex: "course", key: "course" },
    {
      title: "Completed Date",
      dataIndex: "completedDate",
      key: "completedDate",
    },
    {
      title: "Action",
      dataIndex: "status",
      key: "status",
      render: (status) => <Button type="primary">Generate</Button>,
    },
  ];

  const quizzesData = [
    {
      quiz: "HTML Quiz",
      course: "Web Development",
      dueDate: "2024-02-10",
      status: "Pending",
    },
    {
      quiz: "Newton's Laws Quiz",
      course: "Data Science",
      dueDate: "2024-02-15",
      status: "Completed",
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
          <div className="flex items-center justify-center">
            <p className="text-2xl ">No enrolled courses</p>
          </div>
          <div>
            {studentBoughtCoursesList?.map((index, vale) => (
              <StudentEnrolledCourse key={index} val={vale} />
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
            dataSource={quizzesData}
            rowKey="quiz"
          />
          {showQuiz && (
            <Modal
              title="Start Quiz"
              open={showQuiz} // Correct property for visibility
              onCancel={() => setShowQuiz(false)} // Use onCancel to close the modal
              footer={null} // Optional: remove footer if not needed
              width={800}
            >
              <div className="flex flex-col gap-4">
                <Quiz />
              </div>
            </Modal>
          )}
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
          <Table columns={certificates} dataSource={[]} rowKey="quiz" />
        </TabPane>
      </Tabs>
    </div>
  );
};

export default StudentDashboard;
