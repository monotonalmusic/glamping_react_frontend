import { Link } from "react-router-dom";
import page from "../../styles/modules/page/page.module.css";
import { useAppContext } from "../../context/AppContext";
import PageHeader from "../../components/pageheader/PageHeader";
import Box from "../../components/box/Box";
import Button from "../../components/button/Button";
import OpholdList from "../../components/opholdlist/OpholdList";
import styles from "./opholdpage.module.css";

const OpholdPage = () => {
  const { local } = useAppContext();

  return (
    <div className={styles.pageBg}>
      <div className={styles.opholdPage}>
        <PageHeader bgImg={"/image_01.jpg"} title={"Vores Ophold"}></PageHeader>
        <div className={styles.pageContent}>
        <Box title="Vi har ophold til enhver smag" width={"50vw"} height={"auto"}>
          Vores glampingophold er skabt til at tilbyde en kombination af eventyr
          og afslapning. Det er den ideelle flugt fra byens støj og stress, og
          det perfekte sted at genoplade batterierne i en naturskøn indstilling.
          Book dit ophold i dag og giv dig selv lov til at fordybe dig i naturen
          og nyde luksus i det fri. Vi ser frem tid at byde dig velkommen til en
          oplevelse fyldt med komfort, eventyr og skønhed.
        </Box>
        <OpholdList></OpholdList>
            
        </div>
      </div>
    </div>
  );
};
export default OpholdPage;
