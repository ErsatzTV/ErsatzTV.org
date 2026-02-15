import React from 'react';
import styles from "./style.module.css";

const ForumCard = () => (
    <div className='card card--contact'>
        <div className='card__header' style={{ display: 'flex' }}>
            <h3 className='margin-bottom--none' style={{ flexGrow: 1 }}>
                Forum
            </h3>
        </div>
        <div className='card__body'>
            Join us in our commmunity for release announcements, troubleshooting, and development discussions.
        </div>
        <div className='card__footer'>
            <div className={styles.buttonGroup}>
                <a href='https://discuss.ersatztv.org' className='button button--secondary button--forum'>
                    Join the ErsatzTV Community
                </a>
            </div>
        </div>
    </div>
);

export default ForumCard;