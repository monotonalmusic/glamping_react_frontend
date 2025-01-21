import styles from "./backoffice.module.css";
import { Link } from "react-router-dom";
import ActivityForm from "../../components/activityform/ActivityForm";
import ActivityList from "../../components/activitylist/ActivityList";
import useAuth from "../../hooks/useAuth";

const Backoffice = () => {
  const { signOut, user } = useAuth();

  return (
    <article className={styles.backoffice}>
      <h1>BACKOFFICE</h1>
      <h1>Hej {user.name}</h1>
      <div className={styles.backNavDiv}>
        <button onClick={() => signOut()}>Log ud</button>
        <Link to="/">Tilbage til frontend</Link>
      </div>
      <div className={styles.container}>
        <ActivityForm />
        <ActivityList />
      </div>
    </article>
  );
};

export default Backoffice;
