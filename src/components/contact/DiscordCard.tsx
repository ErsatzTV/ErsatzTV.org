import React from 'react';
import styles from "./style.module.css";

const DiscordCard = () => (
    <div className='card card--contact'>
        <div className='card__header' style={{ display: 'flex' }}>
            <h3 className='margin-bottom--none' style={{ flexGrow: 1 }}>
                Discord
            </h3>
        </div>
        <div className='card__body'>
            The ErsatzTV Discord server is bridged to the official Matrix rooms for convenience.
        </div>
        <div className='card__footer'>
            <div className={styles.buttonGroup}>
                <a href='https://discord.ersatztv.org' className='button button--secondary button--md'>
                    Join the Discord Server
                </a>
            </div>
        </div>
    </div>
);

export default DiscordCard;
