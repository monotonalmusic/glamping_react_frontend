import { useState } from "react";
import useAuth from "../hooks/useAuth";
import { backendURL } from "../services/settings";

const useActivity = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [image, setImage] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);
  const { token } = useAuth();

  const createActivity = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess(false);

    const payload = {
      title,
      description,
      date,
      time,
      image, // This must not be undefined
    };
    

    if (!image) {
      setError("Image is required.");
      return;
    }

    try {
      const response = await fetch(`${backendURL}/activity`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || "Failed to create activity.");
      }

      setSuccess(true);
    } catch (err) {
      setError(err.message);
    }
  };

  const updateActivity = async (id, e) => {
    e.preventDefault();
    setError("");
    setSuccess(false);

    try {
      const response = await fetch(`${backendURL}/activity/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          title,
          description,
          date,
          time,
          image,
        }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || "Failed to update activity.");
      }

      setSuccess(true);
    } catch (err) {
      setError(err.message);
    }
  };

  const deleteActivity = async (id) => {
    setError("");
    setSuccess(false);

    try {
      const response = await fetch(`${backendURL}/activity/${id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || "Failed to delete activity.");
      }

      setSuccess(true);
    } catch (err) {
      setError(err.message);
    }
  };

  return {
    createActivity,
    updateActivity,
    deleteActivity,
    title,
    setTitle,
    description,
    setDescription,
    date,
    setDate,
    time,
    setTime,
    image,
    setImage,
    error,
    success,
    setSuccess
  };
};

export default useActivity;
