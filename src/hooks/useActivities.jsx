import { useState, useEffect } from 'react';
import { backendURL } from '../services/settings';

const useActivities = () => {
  const [activities, setActivities] = useState([]); // State to store fetched activities
  const [error, setError] = useState(null); // State to store error messages
  const [loading, setLoading] = useState(false); // State to indicate loading status

  useEffect(() => {
    const url = `${backendURL}/activities`;

    const fetchActivities = async () => {
      setLoading(true);
      setError(null);

      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error(`Failed to fetch activities: ${response.statusText}`);
        }

        const data = await response.json();
        setActivities(data.data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchActivities();
  }, []); // Dependency array ensures the hook runs once on mount

  return { activities, error, loading };
};

export default useActivities;

