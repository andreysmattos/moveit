import { useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengesContext';
import styles from '../styles/components/ChallengeBox.module.css'

export function ChallengeBox() {

    const {acitveChallenge, resetChallenger} = useContext(ChallengesContext);

    const hasActiveChallenge = true;
    // const hasActiveChallenge = false;

    return (
        <div className={styles.challengeBoxContainer}>
            {acitveChallenge ? (
                <div className={styles.challengeBoxActive}>
                    <header>Ganhe {acitveChallenge.ammount} xp</header>

                    <main>
                        <img src={`icons/${acitveChallenge.type}.svg`} />
                        <strong>Novo desafio</strong>
                        <p>{acitveChallenge.description}</p>
                    </main>

                    <footer>
                        <button
                            type="button"
                            className={styles.challengeBoxFaliedButton}
                            onClick={resetChallenger}
                        >Falhei</button>

                        <button 
                        type="button"
                        className={styles.challengeBoxSucceedButton}
                        >Completei</button>
                    </footer>

                </div>
            ) : (
                    <div className={styles.challengeBoxNotActive}>
                        <strong>
                            Finalize um ciclo para receber um desafio
                </strong>

                        <p>
                            <img src="/icons/level-up.svg" alt="level up" />
                    Avance de level completando desafios
                </p>
                    </div>
                )}
        </div>
    )
}