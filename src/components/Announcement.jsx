import React from "react";
import styles from '../styles/Announcement.module.css';

const Announcement = () => {
    return(
        <div className={styles['announcement-container']}>
            <h1 className={styles.announcement}>VISIT US ON TIKTOK @BRAVALAND.COM</h1>
        </div>
    );
};

export default Announcement;