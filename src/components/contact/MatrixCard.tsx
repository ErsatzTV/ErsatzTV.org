import React from 'react';
import styles from "./style.module.css";

const MatrixCard = () => (
    <div className='card card--contact'>
        <div className='card__header'>
            <h3 className='margin-bottom--none flex-grow-1'>
                Matrix
            </h3>
        </div>
        <div className='card__body'>
            We use <a href='https://element.io/get-started' target='_blank' rel='noopener noreferrer'>Element</a> to access the{' '}
            <a href='https://www.matrix.org' target='_blank' rel='noopener noreferrer'>Matrix</a> network. Find the official rooms in the ErsatzTV Space!
            <div className='row margin-top--lg margin-bottom--md'>
                <div className='col'>
                    <ul>
                        <li>
                            <a href='https://matrix.to/#/#ersatztv:matrix.org' target='_blank' rel='noopener noreferrer'>#ersatztv</a>
                        </li>
                        <li>
                            <a href='https://matrix.to/#/#ersatztv-announce:matrix.org' target='_blank' rel='noopener noreferrer'>#ersatztv-announce</a>
                        </li>
                        <li>
                            <a href='https://matrix.to/#/#ersatztv-help:matrix.org' target='_blank' rel='noopener noreferrer'>#ersatztv-help</a>
                        </li>
                        <li>
                            <a href='https://matrix.to/#/#ersatztv-dev:matrix.org' target='_blank' rel='noopener noreferrer'>#ersatztv-dev</a>
                        </li>
                        <li>
                            <a href='https://matrix.to/#/#ersatztv-offtopic:matrix.org' target='_blank' rel='noopener noreferrer'>#ersatztv-offtopic</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <div className='card__footer'>
            <div className={styles.buttonGroup}>
                <a href='https://matrix.to/#/#ersatztvorg:matrix.org' className='button button--secondary button--matrix' target='_blank' rel='noopener noreferrer'>
                    Join the ErsatzTV Space
                </a>
            </div>
        </div>
    </div>
);

export default MatrixCard;
