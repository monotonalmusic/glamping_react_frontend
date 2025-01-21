import { useState, useEffect } from 'react';

const useReviews = () => {
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const getReviews = async () => {
    setLoading(true);
    setError(null);

    try {
      const response = await fetch('http://localhost:3042/reviews');

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      setReviews(data.data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getReviews();
  }, []);

  return { reviews, loading, error, getReviews };
};

export default useReviews;
