import { createContext } from 'react'
import { useState, ReactNode } from 'react';
import challenges from '../../challenges.json'

interface Challenge {
    type: 'body' | 'eye';
    description: string;
    ammount: number;
}

interface ChallengesContextData {
    level: number;
    currentExperience: number;
    experienceToNextLevel: number;
    levelUp: () => void;

    challengesCompleted: number;
    resetChallenger: () => void;
    startNewChallenger: () => void,
    acitveChallenge: Challenge

}

interface ChallengesProviderProps {
    children: ReactNode

}

export const ChallengesContext = createContext({} as ChallengesContextData);


export function ChallengesProvider({ children }: ChallengesProviderProps) {

    const [level, setLevel] = useState(1);
    const [currentExperience, setCurrentExperience] = useState(0);
    const [challengesCompleted, setchallengesCompleted] = useState(0);
    const [acitveChallenge, setacitveChallenge] = useState(null);

    const experienceToNextLevel = Math.pow((level+1)*4, 2)


    function levelUp() {
        setLevel(level + 1)
    }


    function startNewChallenger() {

        const randomIndex = Math.floor(Math.random() * challenges.length);

        const challenge = challenges[randomIndex];

        setacitveChallenge(challenge)
    }

    function resetChallenger(){
        setacitveChallenge(null);
    }


    return (
        <ChallengesContext.Provider
            value={
                {
                    level,
                    levelUp,
                    currentExperience,
                    challengesCompleted,
                    startNewChallenger,
                    acitveChallenge,
                    resetChallenger,
                    experienceToNextLevel
                }
            }>
            {children}
        </ChallengesContext.Provider>
    )
}
