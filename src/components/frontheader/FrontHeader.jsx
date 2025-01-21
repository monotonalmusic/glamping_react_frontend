import styles from './frontheader.module.css';

import Button from '../button/Button';

const FrontHeader = ({ title, bgImg, children }) => {
    return (
        <div className={styles.frontHeaderContainer} style={{ backgroundImage: `url(${bgImg})` }}>
            <img src="/logo.png" className={styles.logo} alt="" />
            <h1>{title}</h1>
            <Button color={"white"}>Book nu</Button>

        </div>
        
    );
}

export default FrontHeader;