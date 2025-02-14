import { useState, useEffect } from "react";

import { fetchInstructorCourseListService } from "../services";

const useFetchCourse = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetchInstructorCourseListService();
        console.log(response);
        console.log(response.data);
        setData(response.data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return { data, loading, error };
};

export default useFetchCourse;
