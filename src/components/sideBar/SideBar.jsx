import React from 'react';
import yogaImage from '../../assets/images/yoga.svg';
import swimmingImage from '../../assets/images/swimming.svg';
import bikeImage from '../../assets/images/bike.svg';
import weightImage from '../../assets/images/weight.svg';
import copyrightImage from '../../assets/images/copyright.svg';
import styles from './SideBar.module.css';

// Main component to render the lateral menu
const SideBar = () => {
    return (
        <aside className={styles.sideBarContent}>
            <nav className={styles.sideBarNav} aria-label="Activity navigation">
                <ul className={styles.navList}>
                    <li className={styles.navItem}>
                        <img src={yogaImage} alt="Yoga" />
                    </li>
                    <li className={styles.navItem}>
                        <img src={swimmingImage} alt="Swimming" />
                    </li>
                    <li className={styles.navItem}>
                        <img src={bikeImage} alt="Biking" />
                    </li>
                    <li className={styles.navItem}>
                        <img src={weightImage} alt="Weight training" />
                    </li>
                </ul>
            </nav>
            <p className={styles.sideBarCopyright}>
                <img
                    src={copyrightImage}
                    alt="Copyright"
                />
            </p>
        </aside>
    );
};

export default SideBar;
