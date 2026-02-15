import React from 'react';
import styles from "./style.module.css";

const MatrixCard = () => {
    return (
        <div className='card card--contact'>
            <div className='card__header' style={{ display: 'flex' }}>
                <h3 className='margin-bottom--none' style={{ flexGrow: 1 }}>
                    Matrix
                </h3>
            </div>
            <div className='card__body'>
                We use <a href='https://element.io/get-started'>Element</a> to access the{' '}
                <a href='https://www.matrix.org'>Matrix</a> network. Find the official rooms in the ErsatzTV Space!
                <br />
                <br />
                <div className='row margin-bottom--md'>
                    <div className='col'>
                        <ul>
                            <li>
                                <a href='https://matrix.to/#/#ersatztv:matrix.org'>#ersatztv</a>
                            </li>
                            <li>
                                <a href='https://matrix.to/#/#ersatztv-announce:matrix.org'>#ersatztv-announce</a>
                            </li>
                            <li>
                                <a href='https://matrix.to/#/#ersatztv-help:matrix.org'>#ersatztv-help</a>
                            </li>
                            <li>
                                <a href='https://matrix.to/#/#ersatztv-dev:matrix.org'>#ersatztv-dev</a>
                            </li>
                            <li>
                                <a href='https://matrix.to/#/#ersatztv-offtopic:matrix.org'>#ersatztv-offtopic</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className='card__footer'>
                <div className={styles.buttonGroup}>
                    <a href='https://matrix.to/#/#ersatztvorg:matrix.org' className='button button--secondary button--matrix'>
                        Join the ErsatzTV Space
                    </a>
                </div>
            </div>
        </div>
    );
};

export default MatrixCard;
