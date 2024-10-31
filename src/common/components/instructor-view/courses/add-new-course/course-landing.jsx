import { Card } from "antd"; // Import Ant Design Card component
import { useContext } from "react";
import { InstructorContext } from "../../../../context/instructor-context";
import FormControls from "../../../common-form/form-controls";
import { courseLandingPageFormControls } from "../../../config";

function CourseLanding() {
  const { courseLandingFormData, setCourseLandingFormData } =
    useContext(InstructorContext);

  return (
    <Card title="Course Landing Page">
      <FormControls
        formControls={courseLandingPageFormControls}
        formData={courseLandingFormData}
        setFormData={setCourseLandingFormData}
      />
    </Card>
  );
}

export default CourseLanding;
