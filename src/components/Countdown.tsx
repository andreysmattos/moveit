import React, { useState, useEffect } from 'react';

import styles from '../styles/components/Countdown.module.css'

export function Countdown() {


    let countdownTimeout: NodeJS.Timeout;

    const [time, setTime] = useState(0.1 * 60);
    const [isActive, setIsActive] = useState(false);
    const [hasFinish, setHasFinish] = useState(false);

    const minutes = Math.floor(time / 60);
    const seconds = time % 60

    const [minuteLeft, minuteRight] = String(minutes).padStart(2, '0').split('');
    const [secondLeft, secondRight] = String(seconds).padStart(2, '0').split('');

    function startCountdown() {
        setIsActive(true)
    }


    function resetCountdown() {
        clearTimeout(countdownTimeout);
        setIsActive(false)
        setTime(0.1 * 60)
    }

    useEffect(() => {
        if (isActive && time > 0) {
            countdownTimeout = setTimeout(() => {
                setTime(time - 1)
                console.log('time')
            }, 1000)
        } else if (isActive && time === 0) {
            console.log('Finalizou o contador');
            setHasFinish(true);
            setIsActive(false);
        }
    }, [isActive, time])

    return (
        <div>
            <div className={styles.countdownContainer}>
                <div>
                    <span>{minuteLeft}</span>
                    <span>{minuteRight}</span>
                </div>

                <span>:</span>

                <div>
                    <span>{secondLeft}</span>
                    <span>{secondRight}</span>
                </div>


            </div>





            {hasFinish ? (
                <button
                    disabled
                    onClick={resetCountdown}
                    className={styles.countdownButton}>
                    Ciclo encerrado
                </button>
            ) : (
                    <>
                        {isActive ?
                            (
                                <button type="button"
                                    onClick={resetCountdown}
                                    className={`${styles.countdownButton} ${styles.countdownButtonActive}`}>
                                    Abandonar ciclo
                                </button>
                            ) : (
                                <button type="button"
                                    onClick={startCountdown}
                                    className={styles.countdownButton}>
                                    Iniciar um ciclo
                                </button>
                            )
                        }
                    </>)}



        </div>
    );
}