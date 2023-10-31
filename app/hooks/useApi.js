import { useState } from "react";

export default useApi = (apiFunc) => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  const request = async (...args) => {
    // Call to the server
    setLoading(true);
    const response = await apiFunc(...args);
    setLoading(false);

    // If error - show an error
    if (!response.ok) return setError(true);

    // Error handling when fetching data
    setError(false);
    setData(response.data);
  };

  return { data, error, loading, request };
};
