import { Button, Card, Spin, Tabs } from "antd";
import { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {
  courseCurriculumInitialFormData,
  courseLandingInitialFormData,
} from "../config";
import { AuthContext } from "../context/auth-context";
import { InstructorContext } from "../context/instructor-context";
import {
  addNewCourseService,
  fetchInstructorCourseDetailsService,
  updateCourseByIdService,
} from "../services";

import toast from "react-hot-toast";
import CourseCurriculum from "../components/instructor-view/courses/add-new-course/course-curriculum";
import CourseLanding from "../components/instructor-view/courses/add-new-course/course-landing";
import CourseSettings from "../components/instructor-view/courses/add-new-course/course-settings";
const { TabPane } = Tabs;

function AddNewCoursePage() {
  const {
    courseLandingFormData,
    courseCurriculumFormData,
    setCourseLandingFormData,
    setCourseCurriculumFormData,
    currentEditedCourseId,
    setCurrentEditedCourseId,
  } = useContext(InstructorContext);
  const { auth } = useContext(AuthContext);
  const navigate = useNavigate();
  const params = useParams();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (params?.courseId) setCurrentEditedCourseId(params.courseId);
  }, [params.courseId]);

  useEffect(() => {
    if (currentEditedCourseId !== null) fetchCurrentCourseDetails();
  }, [currentEditedCourseId]);

  async function fetchCurrentCourseDetails() {
    const response = await fetchInstructorCourseDetailsService(
      currentEditedCourseId
    );
    if (response?.success) {
      setCourseLandingFormData({
        ...courseLandingInitialFormData,
        ...response.data,
      });
      setCourseCurriculumFormData(response.data?.curriculum || []);
    }
  }

  function isEmpty(value) {
    return Array.isArray(value)
      ? value.length === 0
      : value === "" || value === null || value === undefined;
  }
  function validateFormData() {
    // Always return true if in edit mode
    if (currentEditedCourseId !== null) {
      return true;
    }

    // Existing validation logic for new course creation
    const isLandingFormValid = Object.values(courseLandingFormData).every(
      (field) => !isEmpty(field)
    );

    const hasAtLeastOneFreePreview = courseCurriculumFormData.some(
      (item) => item.freePreview
    );

    return isLandingFormValid && hasAtLeastOneFreePreview;
  }

  async function handleCreateCourse() {
    setIsLoading(true);
    const courseData = {
      instructorId: auth?.user?._id,
      instructorName: auth?.user?.userName,
      date: new Date(),
      ...courseLandingFormData,
      students: [],
      curriculum: courseCurriculumFormData,
      isPublished: true,
    };

    try {
      const response = currentEditedCourseId
        ? await updateCourseByIdService(currentEditedCourseId, courseData)
        : await addNewCourseService(courseData);

      if (response?.success) {
        // Success: reset form and navigate
        setCourseLandingFormData(courseLandingInitialFormData);
        setCourseCurriculumFormData(courseCurriculumInitialFormData);
        setCurrentEditedCourseId(null);
        navigate(-1);
        toast.success("Course created successfully!");
      } else {
        // Handle the case where response is not successful
        alert(response?.message || "Failed to create course."); // or use a toast notification
      }
    } catch (error) {
      // Error handling
      console.error("Error creating course:", error);
      toast.error(
        "An error occurred while creating the course. Please try again."
      );
    } finally {
      setIsLoading(false); // Ensure loading state is reset
    }
  }

  return (
    <div className="container mx-auto p-4">
      <div className="flex justify-between">
        <h1 className="text-3xl font-extrabold mb-5">Create a new course</h1>
        {isLoading ? (
          <Spin />
        ) : (
          <Button
            disabled={!validateFormData()}
            className="text-sm tracking-wider font-bold px-8"
            onClick={handleCreateCourse}
          >
            SUBMIT
          </Button>
        )}
      </div>
      <Card>
        <Tabs defaultActiveKey="1">
          <TabPane tab="Curriculum" key="1">
            <CourseCurriculum />
          </TabPane>
          <TabPane tab="Course Landing Page" key="2">
            <CourseLanding />
          </TabPane>
          <TabPane tab="Settings" key="3">
            <CourseSettings />
          </TabPane>
        </Tabs>
      </Card>
    </div>
  );
}

export default AddNewCoursePage;
