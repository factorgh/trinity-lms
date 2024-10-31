import { DollarOutlined, UserOutlined } from "@ant-design/icons"; // Use Ant Design icons
import { Card, Col, Row, Table } from "antd"; // Import necessary Ant Design components

function InstructorDashboard({ listOfCourses }) {
  function calculateTotalStudentsAndProfit() {
    const { totalStudents, totalProfit, studentList } = listOfCourses.reduce(
      (acc, course) => {
        const studentCount = course.students.length;
        acc.totalStudents += studentCount;
        acc.totalProfit += course.pricing * studentCount;

        course.students.forEach((student) => {
          acc.studentList.push({
            courseTitle: course.title,
            studentName: student.studentName,
            studentEmail: student.studentEmail,
          });
        });

        return acc;
      },
      {
        totalStudents: 0,
        totalProfit: 0,
        studentList: [],
      }
    );

    return {
      totalProfit,
      totalStudents,
      studentList,
    };
  }

  const { totalProfit, totalStudents, studentList } =
    calculateTotalStudentsAndProfit();

  const config = [
    {
      icon: <UserOutlined />,
      label: "Total Students",
      value: totalStudents,
    },
    {
      icon: <DollarOutlined />,
      label: "Total Revenue",
      value: totalProfit,
    },
  ];

  const columns = [
    {
      title: "Course Name",
      dataIndex: "courseTitle",
      key: "courseTitle",
    },
    {
      title: "Student Name",
      dataIndex: "studentName",
      key: "studentName",
    },
    {
      title: "Student Email",
      dataIndex: "studentEmail",
      key: "studentEmail",
    },
  ];

  return (
    <div>
      <Row gutter={16} className="mb-8">
        {config.map((item, index) => (
          <Col span={12} key={index}>
            <Card>
              <div className="flex justify-between items-center">
                <div>
                  <h3 className="text-lg font-medium">{item.label}</h3>
                  <div className="text-2xl font-bold">{item.value}</div>
                </div>
                {item.icon}
              </div>
            </Card>
          </Col>
        ))}
      </Row>
      <Card title="Students List">
        <Table
          dataSource={studentList}
          columns={columns}
          rowKey={(record) => record.studentEmail}
        />
      </Card>
    </div>
  );
}

export default InstructorDashboard;
