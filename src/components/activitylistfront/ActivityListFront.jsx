import { useState } from "react";
import { useAppContext } from "../../context/AppContext"; // Import context
import useActivities from "../../hooks/useActivities";
import Box from "../box/Box"; // Adjust import path if needed
import Button from "../button/Button"; // Adjust import path if needed
import styles from "./activitylistfront.module.css"; // Add appropriate styles if not present

const ActivityListFront = ({ activeActivities }) => {
  const { activityFavorites, toggleFavorite } = useAppContext(); // Use context functions
  const [visibleActivity, setVisibleActivity] = useState(null);

  const toggleDescription = (activityId) => {
    setVisibleActivity((prev) => (prev === activityId ? null : activityId));
  };

  const isFavorited = (activityId) =>
    activityFavorites.some((fav) => fav._id === activityId);

  return (
    <div className={styles.activityContainer}>
      <ul className={styles.activityList}>
        {activeActivities.map((activity) => (
          <li key={activity._id}>
            <div className={styles.listDiv}>
              <Box
                title={activity.title}
                color={"#C5B496"}
                width={"35vw"}
                height={"200px"}
                className={styles.activityBox}
              ></Box>
              <div
                className={styles.pictureDiv}
                style={{ backgroundImage: `url(${activity.image})` }}
              ></div>

              <Button
                backgroundColor={"#829B97"}
                onclick={() => toggleDescription(activity._id)}
              >
                {visibleActivity === activity._id ? "Minimere" : "Læs mere"}
              </Button>

              {visibleActivity === activity._id && (
                <div className={styles.activityContent}>
                  
                  <p>{activity.description}</p>
                  <button
                    className={styles.heartButton}
                    onClick={() => toggleFavorite(activity)}
                    style={{ backgroundColor: "transparent", border: "none" }}
                  >
                    {isFavorited(activity._id) ? "❤️" : "💔"}
                  </button>
                  <p>Date: {activity.date}</p>
                  <p>Time: {activity.time}</p>
                </div>
              )}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ActivityListFront;
