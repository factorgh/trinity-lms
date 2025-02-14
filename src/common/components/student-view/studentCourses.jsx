/* eslint-disable react/prop-types */
const StudentEnrolledCourse = ({ val }) => {
  console.log(val);
  const { image, title, description } = val;

  return (
    <div className="relative border border-gray-200 rounded-xl overflow-hidden shadow-md hover:shadow-lg transition duration-300 ease-in-out cursor-pointer">
      {/* Course Image */}
      <img
        src={image}
        alt={title}
        className="w-full h-48 object-cover rounded-t-xl"
      />

      {/* Course Content */}
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
        <p className="text-sm text-gray-600 mt-2">
          {description?.length > 100
            ? `${description.slice(0, 100)}...`
            : description}
        </p>
      </div>

      {/* Action Button */}
      <div className="px-4 pb-4">
        <button className="w-full bg-blue-600 text-white font-medium py-2 rounded-lg hover:bg-blue-700 transition duration-300">
          Start Watching
        </button>
      </div>
    </div>
  );
};

export default StudentEnrolledCourse;
