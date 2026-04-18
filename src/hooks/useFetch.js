import { useState, useEffect } from "react";
import api from "../api/config";

const useFetch = (url, initialData) => {
  const [data, setData] = useState(initialData);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    api.get(url)
      .then((res) => {
        setLoading(true);        // ✅ moved inside the callback
        setData(res.data);
      })
      .catch((error) => {
        setError(error.message);
      })
      .finally(() => {
        setLoading(false);       // ✅ stop loading when done
      });
  }, [url]);

  return { data, loading, error };
};

export default useFetch;