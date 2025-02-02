import {
  BarChartOutlined,
  ProfileOutlined,
  TeamOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Avatar, Card, Select, Statistic, Table, Tabs } from "antd";
import React, { useState } from "react";

const { TabPane } = Tabs;
const { Option } = Select;

const TeacherDashboard = () => {
  const [selectedYear, setSelectedYear] = useState("2024");

  // Dummy statistics data
  const statistics = [
    { title: "Total Students", value: 120, icon: <TeamOutlined /> },
    { title: "Courses Taught", value: 5, icon: <BarChartOutlined /> },
    { title: "Average Grade", value: "85%", icon: <UserOutlined /> },
  ];

  // Dummy student data
  const studentColumns = [
    { title: "ID", dataIndex: "id", key: "id" },
    { title: "Name", dataIndex: "name", key: "name" },
    { title: "Class", dataIndex: "class", key: "class" },
  ];
  const studentData = [
    { id: "S001", name: "Alice Johnson", class: "Math 101" },
    { id: "S002", name: "Bob Smith", class: "Physics 202" },
  ];

  // Dummy grades data
  const gradesColumns = [
    { title: "Student", dataIndex: "name", key: "name" },
    { title: "Course", dataIndex: "course", key: "course" },
    { title: "Year", dataIndex: "year", key: "year" },
    { title: "Grade", dataIndex: "grade", key: "grade" },
  ];
  const gradesData = [
    { name: "Alice Johnson", course: "Math 101", year: "2024", grade: "A" },
    { name: "Bob Smith", course: "Physics 202", year: "2023", grade: "B+" },
  ];

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-2xl font-bold mb-4">Teacher Dashboard</h1>

      <Tabs defaultActiveKey="1" type="card">
        {/* Statistics Tab */}
        <TabPane
          tab={
            <span>
              <BarChartOutlined /> Statistics
            </span>
          }
          key="1"
        >
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {statistics.map((stat, index) => (
              <Card key={index} className="shadow-md">
                <Statistic
                  title={stat.title}
                  value={stat.value}
                  prefix={stat.icon}
                />
              </Card>
            ))}
          </div>
        </TabPane>

        {/* Students Tab */}
        <TabPane
          tab={
            <span>
              <TeamOutlined /> Students
            </span>
          }
          key="2"
        >
          <Table
            columns={studentColumns}
            dataSource={studentData}
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
          key="3"
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
            rowKey={(record) => record.name + record.year}
          />
        </TabPane>

        {/* Profile Tab */}
        <TabPane
          tab={
            <span>
              <UserOutlined /> Profile
            </span>
          }
          key="4"
        >
          <Card className="shadow-md p-6 text-center">
            <Avatar size={100} icon={<UserOutlined />} />
            <h2 className="text-xl font-bold mt-4">John Doe</h2>
            <p className="text-gray-600">Senior Mathematics Teacher</p>
            <p>Email: johndoe@example.com</p>
            <p>Phone: +123 456 7890</p>
          </Card>
        </TabPane>
      </Tabs>
    </div>
  );
};

export default TeacherDashboard;
