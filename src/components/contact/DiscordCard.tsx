import React from 'react';
import styles from "./style.module.css";

const DiscordCard = () => (
    <div className='card card--contact'>
        <div className='card__header d-flex'>
            <h3 className='margin-bottom--none flex-grow-1'>
                Discord
            </h3>
        </div>
        <div className='card__body'>
            The ErsatzTV Discord server is bridged to the official Matrix rooms for convenience.
        </div>
        <div className='card__footer'>
            <div className={styles.buttonGroup}>
                <a href='https://discord.ersatztv.org' className='button button--secondary button--md' target='_blank' rel='noopener noreferrer'>
                    Join the Discord Server
                </a>
            </div>
        </div>
    </div>
);

export default DiscordCard;
