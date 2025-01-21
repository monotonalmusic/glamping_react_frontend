import { Link } from "react-router-dom";
import page from "../../styles/modules/page/page.module.css";
import { useAppContext } from "../../context/AppContext";
import Box from "../../components/box/Box";
import Button from "../../components/button/Button";
import FrontHeader from "../../components/frontheader/FrontHeader";
import Footer from "../../components/footer/Footer";
import Reviews from "../../components/reviews/Reviews";


import styles from "../home/homepage.module.css"

const HomePage = () => {
  const { local } = useAppContext();


  return (
    <div className={styles.pageBg}>
      <div className={styles.homePage}>
        <FrontHeader title="Gittes Glamping" bgImg="/image_00.jpg"></FrontHeader>
        <Box height={"95vh"} width={"800px"} title={"Prøve glamping!"}>
          Vi er stolte af at byde dig velkommen til Gitte’s Glamping, hvor
          hjertevarme og omsorg møder naturens skønhed og eventyr. Vores
          dedikerede team, anført af Gitte selv, er her for at skabe den
          perfekte ramme om din luksuriøse udendørsoplevelse. Vi stræber efter
          at skabe minder og fordybelse, uanset om du besøger os som par,
          familie eller soloeventyrer. Vi tilbyder en bred vifte af aktiviteter
          og arrangementer, der passer til alle aldre og interesser. Udforsk
          naturen, slap af ved bålet, del historier med nye venner, eller find
          indre ro med vores wellnessaktiviteter
          <img src="/gitte.jpg" alt="" className={styles.gitteImg}/>
          <Link to={"/ophold"}>
          <Button color={"white"}>Se Vores Ophold</Button>
          </Link>
           
          
        </Box>
        <Reviews></Reviews>
        
      </div>
    </div>
  );
};
export default HomePage;
