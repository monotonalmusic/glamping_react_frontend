import styles from "./footer.module.css";
import { CiInstagram, CiFacebook } from "react-icons/ci";



const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.socialDiv}>
      <CiFacebook style={{ height: "50px", width: "50px", color: "white"
       }} />
      <CiInstagram style={{ height: "50px", width: "50px", color: "white" }} />
     

      </div>
      <div className={styles.bottomFooterDiv}>
        <img src="/logo.png" className={styles.logo} alt="" />
        <h2>Gittes Glamping</h2>
      </div>
    </footer>
  );
};

export default Footer;
