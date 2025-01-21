import { useParams } from "react-router-dom";
import styles from "./opholdsinglepage.module.css";
import useStays from "../../hooks/useStays";
import Button from "../../components/button/Button";
import PageHeader from "../../components/pageheader/PageHeader";

const OpholdSinglePage = () => {
  const { stays, loading, error } = useStays();

  if (loading) return <p>Loading stays...</p>;
  if (error) return <p>Error: {error}</p>;

  const { id } = useParams();
  const stay = stays.find((o) => o._id === id);

  if (!stay) {
    console.log(stays);
    console.log(id);
    return <div className={styles.error}>Stay not found.</div>;
  }

  const { title } = stay;

  // Determine the background image based on the title
  const getBackgroundImage = (title) => {
    switch (title) {
      case "Weekendtur":
        return "/stays/weekend.jpg";
      case "Familiepakke":
        return "/stays/familiepakken.jpg";
      case "Romantisk Getaway":
        return "/stays/weekend.jpg";
      default:
        return "/images/default_bg.jpg";
    }
  };

  const pageBg = getBackgroundImage(title);

  console.log(pageBg)

  return (
    <div className={styles.singlePage}>
      <PageHeader bgImg={`${pageBg}`}></PageHeader>
      <div className={styles.singlePageContent}>
        <h1>{stay.title}</h1>
        <p>{stay.description}</p>
        <ul>
          {stay.includes.map((include, index) => (
            <li key={index}>{include}</li>
          ))}
        </ul>
        <h2>{stay.price} kr</h2>
        <Button backgroundColor={"#829B97"}>BOOK NU</Button>
      </div>
    </div>
  );
};

export default OpholdSinglePage;
