import { Link } from "react-router-dom";
import useStays from "../../hooks/useStays";
import Box from "../box/Box";
import Button from "../button/Button";

import styles from "./opholdlist.module.css";

const Stays = () => {
  const { stays, loading, error } = useStays();

  console.log(stays);

  if (loading) return <p>Loading stays...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className={styles.stayContainer}>
      <ul className={styles.stayList}>
        {stays.map((stay) => (
          <li key={stay._id}>
            <div className={styles.listDiv}>
              <Box
                title={stay.title}
                color={"#C5B496"}
                width={"35vw"}
                height={"225px"}
                className={styles.stayBox}
              >
                <div className={styles.stayContent}>
                  <h2>{stay.numberOfPersons} personer</h2>
                  <h3>Fra {stay.price} kr</h3>
                </div>
              </Box>
              <div
                className={styles.pictureDiv}
                style={{ backgroundImage: `url(${stay.image})` }}
              ></div>

              <Link to={`/ophold/${stay._id}`}>
                <Button backgroundColor={"#829B97"} color={"white"}>Læs mere</Button>
              </Link>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Stays;
