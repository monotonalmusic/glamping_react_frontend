import { Link } from "react-router-dom";
import page from "../../styles/modules/page/page.module.css";
import { useAppContext } from "../../context/AppContext";
import PageHeader from "../../components/pageheader/PageHeader";
import Box from "../../components/box/Box";
import Button from "../../components/button/Button";
import styles from "./aktiviteterpage.module.css";
import ActivityListFront from "../../components/activitylistfront/ActivityListFront";
import useActivities from "../../hooks/useActivities";

const AktiviteterPage = () => {
  const { activities, error, loading } = useActivities();

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }


  return (
    <div className={page.pageContainer}>
      <PageHeader title={"Aktiviteter"} bgImg={"/image_04.jpg"}></PageHeader>
      <div className={styles.aktiviteterPage}>
      <Box title={"Ingen skal kede sig hos Gitte"} width={"800px"} height={"auto"} color={"#33626C"}>
        Glamping er mere end blot en indkvartering - det er en mulighed for at
        fordybe dig i naturen og skabe minder, der varer livet ud. Uanset om du
        foretrækker en eventyrlig kanotur, en oplysende naturvandring,
        hjertevarm samvær omkring bålet, smagfulde oplevelser som vinsmagning
        eller morgenyoga, der giver dig indre ro og balance i naturens skød -
        vil vi hos Gittes Glamping imødekomme dine ønsker
      </Box>
      <ActivityListFront activeActivities={activities}></ActivityListFront>


      </div>
    </div>
  );
};
export default AktiviteterPage;
