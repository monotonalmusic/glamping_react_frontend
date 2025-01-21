import { useState, useEffect } from 'react';

const useStays = () => {
  const [stays, setStays] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const getStays = async () => {
    setLoading(true);
    setError(null);

    try {
      const response = await fetch('http://localhost:3042/stays');

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      setStays(data.data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getStays();
  }, []);

  return { stays, loading, error, getStays };
};

export default useStays;
