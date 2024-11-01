import { Button, Card, Image, Upload } from "antd"; // Import necessary Ant Design components
import { useContext } from "react";
import { InstructorContext } from "../../../../context/instructor-context";
import { mediaUploadService } from "../../../../services";
import MediaProgressbar from "../../../media-progress-bar";

function CourseSettings() {
  const {
    courseLandingFormData,
    setCourseLandingFormData,
    mediaUploadProgress,
    setMediaUploadProgress,
    mediaUploadProgressPercentage,
    setMediaUploadProgressPercentage,
  } = useContext(InstructorContext);

  async function handleImageUploadChange({ file }) {
    const imageFormData = new FormData();
    imageFormData.append("file", file);

    try {
      setMediaUploadProgress(true);
      const response = await mediaUploadService(
        imageFormData,
        setMediaUploadProgressPercentage
      );
      if (response.success) {
        setCourseLandingFormData({
          ...courseLandingFormData,
          image: response.data.url,
        });
        setMediaUploadProgress(false);
      }
    } catch (e) {
      console.log(e);
      setMediaUploadProgress(false); // Ensure progress is reset on error
    }
  }

  return (
    <Card title="Course Settings">
      <div className="p-4">
        {mediaUploadProgress ? (
          <MediaProgressbar
            isMediaUploading={mediaUploadProgress}
            progress={mediaUploadProgressPercentage}
          />
        ) : null}
      </div>
      <Card>
        {courseLandingFormData?.image ? (
          <Image src={courseLandingFormData.image} alt="Course" />
        ) : (
          <div className="flex flex-col gap-3">
            <label>Upload Course Image</label>
            <Upload
              beforeUpload={(file) => {
                handleImageUploadChange({ file });
                return false; // Prevent automatic upload
              }}
              accept="image/*"
            >
              <Button type="primary">Upload Image</Button>
            </Upload>
          </div>
        )}
      </Card>
    </Card>
  );
}

export default CourseSettings;
