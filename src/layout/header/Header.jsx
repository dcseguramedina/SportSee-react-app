import React from 'react';
import {NavLink} from 'react-router-dom';
import logoSportSee from '../../assets/images/logo.svg';
import styles from './Header.module.css';

const Header = () => {
    return (
        <header className={styles.headerContent} role="banner">
            <div className={styles.headerLogo}>
                <img
                    src={logoSportSee}
                    alt="Logo de l’application SportSee"
                />
            </div>
            <nav className={styles.headerNav} aria-label="Navigation principale">
                <NavLink to="/">Accueil</NavLink>
                <NavLink to="/">Profil</NavLink>
                <NavLink to="/">Réglage</NavLink>
                <NavLink to="/">Communauté</NavLink>
            </nav>
        </header>
    );
};

export default Header;
