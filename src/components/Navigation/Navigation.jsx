import { Link, NavLink } from "react-router-dom";
import styles from './navigation.module.css'
import { useState } from "react";
import { icons } from "../../services/icons";

const Navigation = () => {

    const [isOpen, setIsOpen] = useState(false)


    const toggleNavigation = () => {

      
        setIsOpen(!isOpen)
        
    }
  
    return (
        <div className={styles.navigation}>
            <Link to={"/"} className={styles.logo}>
                <img src="/logo.png" alt="logo" className={styles.navLogo} />
            </Link>
            <div onClick={toggleNavigation} className={styles.navMenu}>
                {icons["CiMenuBurger"]}
            </div>

            
            <div className={`${styles.nav} ${isOpen ? styles.open : ''}` }>
                <NavLink to={"/"} className={({ isActive }) => (isActive ? styles.active : "")}>Home</NavLink>
                <NavLink to={"/ophold"} className={({ isActive }) => (isActive ? styles.active : "")}>Ophold</NavLink>
                <NavLink to={"/aktiviteter"} className={({ isActive }) => (isActive ? styles.active : "")}>Aktiviteter</NavLink>
                <NavLink to={"/minliste"} className={({ isActive }) => (isActive ? styles.active : "")}>Min liste</NavLink>
                <NavLink to={"/kontakt"} className={({ isActive }) => (isActive ? styles.active : "")}>Kontakt</NavLink>
            </div>

        </div>
    );
};
export default Navigation;