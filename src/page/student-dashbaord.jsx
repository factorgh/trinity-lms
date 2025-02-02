import {
  BookOutlined,
  FileTextOutlined,
  ProfileOutlined,
} from "@ant-design/icons";
import { Badge, Button, Select, Table, Tabs } from "antd";
import React, { useState } from "react";
import { FaCertificate } from "react-icons/fa6";
import { MdLogout } from "react-icons/md";

const { TabPane } = Tabs;
const { Option } = Select;

const StudentDashboard = () => {
  const [selectedYear, setSelectedYear] = useState("2024");
  function handleLogout() {
    sessionStorage.clear();
    window.location.href = "/";
  }

  // Dummy enrolled courses
  const enrolledCoursesColumns = [
    { title: "Course ID", dataIndex: "id", key: "id" },
    { title: "Course Name", dataIndex: "name", key: "name" },
    { title: "Instructor", dataIndex: "instructor", key: "instructor" },
  ];
  const enrolledCoursesData = [
    { id: "C101", name: "Mathematics", instructor: "Dr. James" },
    { id: "C102", name: "Physics", instructor: "Prof. Adams" },
  ];

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
      quiz: "hmtl Quiz",
      course: "Webe development",
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
    <div className="container mx-auto my-10 gap-6 min-h-screen">
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
          <Table
            columns={enrolledCoursesColumns}
            dataSource={enrolledCoursesData}
            rowKey="id"
          />
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
        </TabPane>
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

        {/* Profile Tab */}
        {/* <TabPane
          tab={
            <span>
              <UserOutlined /> Profile
            </span>
          }
          key="4"
        >
          <Card className="shadow-md p-6 text-center">
            <Avatar size={100} icon={<UserOutlined />} />
            <h2 className="text-xl font-bold mt-4">Alex Johnson</h2>
            <p className="text-gray-600">Computer Science Student</p>
            <p>Email: alexjohnson@example.com</p>
            <p>Phone: +123 456 7890</p>
          </Card>
        </TabPane> */}
      </Tabs>
    </div>
  );
};

export default StudentDashboard;
