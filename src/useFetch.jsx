import { useEffect, useRef, useState } from "react";

const cache = {};

export const useFetch = (url) => {
  const [result, setResult] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const cacheTime = useRef(null);
  
  const fetchData = () => {
    setLoading(true);
    fetch(url)
        .then((res) => res.json())
        .then((data) => {
            cache[url] = { data, timer: Date.now() };
            setResult(data);
            setError(null);
            console.log("Fetched data:", data);
        })
        .catch((err) => {setError(err)
            console.error("Error fetching data:", err)
        })
        .finally(() => setLoading(false));
  };

  const refetch = () => {
    fetchData();
  };

  useEffect(() => {
    if (cache[url] && Date.now() - cache[url].timer < 240000) {
        console.log("Using cached data:", cache[url].data);
        setResult(cache[url].data);
        setLoading(false);
    } else {
        console.log("No valid cache found, fetching new data...");
        fetchData(); 
    }
  }, [url]);

  return { result, error, loading, refetch };
};

