import { useEffect, useState } from "react";

function UseFetch(url) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

useEffect(() => {
    let active = true;
    async function fetchData() {
    try {
        setLoading(true);
        setError(null);
        const response = await fetch(url);
        if (!response.ok) {
        throw new Error("Failed to load data");
        }

        const result = await response.json();

        if (active) {
        setData(result);
        }
    } catch (err) {
        if (active) {
        setError(err.message);
        }
    } finally {
        if (active) {
        setLoading(false);
        }
    }
    }

    fetchData();

    return () => {
    active = false;
    };
}, [url]);

return {
    data,
    loading,
    error,
};
}

export default UseFetch;