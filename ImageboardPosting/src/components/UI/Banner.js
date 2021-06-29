import React from 'react';

import styles from './Banner.module.css';

const Banner = props => {
    return(
        <div className={styles.banner}>
            <p>Welcome to KoiChan</p>
            <p className={styles.subtitle}>self-improvement community</p>
        </div>
    )
};

export default Banner;