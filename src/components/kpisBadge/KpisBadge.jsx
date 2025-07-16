import React from 'react';
import styles from './KpisBadge.module.css';

// Main component to render the Kpi's
const KpisBadge = ({
                   id,
                   icon,
                   alt,
                   bgClass,
                   value,
                   unit,
                   label
               }) => {
    return (
        <div id={id} className={styles.badge}>
            <div className={`${bgClass} ${styles.badgeImage}`}>
                <img src={icon} alt={alt}/>
            </div>
            <div className={styles.badgeContent}>
              <span>
                {value}
                  {unit}
              </span>
                <p>{label}</p>
            </div>
        </div>
    );
};

export default KpisBadge;
