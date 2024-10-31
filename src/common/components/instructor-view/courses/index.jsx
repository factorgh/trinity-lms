import { DeleteOutlined, EditOutlined } from "@ant-design/icons"; // Use Ant Design icons
import { Button, Card, Table } from "antd"; // Import necessary Ant Design components
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { InstructorContext } from "../../../context/instructor-context";
import {
  courseCurriculumInitialFormData,
  courseLandingInitialFormData,
} from "../../config";

function InstructorCourses({ listOfCourses }) {
  const navigate = useNavigate();
  const {
    setCurrentEditedCourseId,
    setCourseLandingFormData,
    setCourseCurriculumFormData,
  } = useContext(InstructorContext);

  const columns = [
    {
      title: "Course",
      dataIndex: "title",
      key: "title",
    },
    {
      title: "Students",
      dataIndex: "students",
      key: "students",
      render: (students) => students.length,
    },
    {
      title: "Revenue",
      dataIndex: "pricing",
      key: "pricing",
      render: (pricing, record) => `$${record.students.length * pricing}`,
    },
    {
      title: "Actions",
      key: "actions",
      render: (_, course) => (
        <>
          <Button
            onClick={() => {
              navigate(`/instructor/edit-course/${course._id}`);
            }}
            icon={<EditOutlined />}
            size="small"
          />
          <Button
            icon={<DeleteOutlined />}
            size="small"
            // Add delete functionality here
            onClick={() => {
              // Handle delete action
            }}
          />
        </>
      ),
    },
  ];

  return (
    <Card
      title="All Courses"
      extra={
        <Button
          onClick={() => {
            setCurrentEditedCourseId(null);
            setCourseLandingFormData(courseLandingInitialFormData);
            setCourseCurriculumFormData(courseCurriculumInitialFormData);
            navigate("/instructor/create-new-course");
          }}
          type="primary"
        >
          Create New Course
        </Button>
      }
    >
      <Table
        dataSource={listOfCourses}
        columns={columns}
        rowKey="_id" // Assuming each course has a unique _id
      />
    </Card>
  );
}

export default InstructorCourses;
