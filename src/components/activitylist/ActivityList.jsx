import { useState, useEffect } from "react";
import styles from "../activitylist/activitylist.module.css";
import useActivity from "../../hooks/useActivity";

const ActivityList = () => {
  const [activities, setActivities] = useState([]);
  const [error, setError] = useState("");
  const [editMode, setEditMode] = useState(false);
  const [currentActivity, setCurrentActivity] = useState(null);
  const {
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
    updateActivity,
    deleteActivity,
  } = useActivity();

  useEffect(() => {
    const fetchActivities = async () => {
      try {
        const response = await fetch("http://localhost:3042/activities", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        });

        if (!response.ok) {
          throw new Error("Failed to fetch activities.");
        }

        const data = await response.json();
        console.log(data.data)
        setActivities(data.data);
      } catch (err) {
        setError(err.message);
      }
    };


    fetchActivities();
  }, [activities]);

  const handleEdit = (activity) => {
    setEditMode(true);
    setCurrentActivity(activity);
    setTitle(activity.title);
    setDescription(activity.description);
    setDate(activity.date);
    setTime(activity.time);
    setImage(activity.image);
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    if (currentActivity) {
      await updateActivity(currentActivity._id, e);
      setEditMode(false);
      setCurrentActivity(null);
      // Refresh activities list
      const response = await fetch("http://localhost:3042/activities", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await response.json();
      setActivities(data.data);
    }
  };

  const handleDelete = async (id) => {
    try {
      await deleteActivity(id);
      // Refresh activities list
      const response = await fetch("http://localhost:3042/activities", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await response.json();
      setActivities(data.data);
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>Activities List</h1>
      {error && <p className={styles.error}>{error}</p>}
      <ul className={styles.list}>
        {activities.length > 0 ? (
          activities.map((activity) => (
            <li key={activity._id} className={styles.listItem}>
              <h2 className={styles.title}>{activity.title}</h2>
              <p className={styles.description}>{activity.description}</p>
              <p className={styles.date}>
                <strong>Date:</strong> {activity.date}
              </p>
              <p className={styles.time}>
                <strong>Time:</strong> {activity.time}
              </p>
              <img
                src={activity.image}
                alt={activity.title}
                className={styles.image}
              />
              <div className={styles.buttonDiv}>
              <button
                className={styles.editButton}
                onClick={() => handleEdit(activity)}
              >
                Edit
              </button>
              <button
                className={styles.deleteButton}
                onClick={() => handleDelete(activity._id)}
              >
                Delete
              </button>

              </div>
              {editMode && currentActivity && currentActivity._id === activity._id && (
                <form className={styles.form} onSubmit={handleUpdate}>
                  <input
                    type="text"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    placeholder="Title"
                    className={styles.input}
                  />
                  <textarea
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    placeholder="Description"
                    className={styles.textarea}
                  />
                  <input
                    type="date"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    className={styles.input}
                  />
                  <input
                    type="time"
                    value={time}
                    onChange={(e) => setTime(e.target.value)}
                    className={styles.input}
                  />
                  <input
                    type="text"
                    value={image}
                    onChange={(e) => setImage(e.target.value)}
                    placeholder="Image URL"
                    className={styles.input}
                  />
                  <button type="submit" className={styles.button}>Update Activity</button>
                  <button
                    type="button"
                    className={styles.buttonSecondary}
                    onClick={() => setEditMode(false)}
                  >
                    Cancel
                  </button>
                </form>
              )}
            </li>
          ))
        ) : (
          <p className={styles.empty}>No activities found.</p>
        )}
      </ul>
    </div>
  );
};

export default ActivityList;

