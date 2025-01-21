import styles from './pageheader.module.css';

const PageHeader = ({ title, bgImg, children }) => {
    return (
        <div className={styles.pageHeaderContainer} style={{ backgroundImage: `url(${bgImg})` }}>
            <h1>{title}</h1>

        </div>
        
    );
}

export default PageHeader;