import { useState, useEffect } from "react";

import { getStudentQuizzes } from "../services";

const useFetchStudentQuizzes = (userId) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getStudentQuizzes(userId);
        console.log(response);
        setData(response);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [userId]);

  return { data, loading, error };
};

export default useFetchStudentQuizzes;
