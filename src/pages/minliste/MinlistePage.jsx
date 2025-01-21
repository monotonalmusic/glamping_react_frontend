import { useAppContext } from "../../context/AppContext"; // Import the context
import styles from "./minlistepage.module.css"; // Import the styles
import ActivityListFront from "../../components/activitylistfront/ActivityListFront";
import PageHeader from "../../components/pageheader/PageHeader";

const MinlistePage = () => {
  const { activityFavorites, toggleFavorite } = useAppContext(); // Access favorites and toggle function

  if (activityFavorites.length === 0) {
    return (
      <div className={styles.emptyState}>
        <PageHeader title={"Ingen Favoritter"} bgImg={"/image_01.jpg"}></PageHeader>
      </div>
    );
  }

  return (
    <div className={styles.favoritesContainer}>
        <PageHeader title={"Min liste"} bgImg={"/image_05.jpg"}></PageHeader>
        <ActivityListFront
            activeActivities={activityFavorites}
            toggleFavorite={toggleFavorite}
        ></ActivityListFront>
    </div>
  );
};

export default MinlistePage;
