'use client';
import styles from './scores.module.scss';
import { FC } from 'react';
import { useGameContext } from '@/providers/GameProvider';
import { useScores } from '@/providers/ScoresProvider';

const Scores: FC = () => {
  const scores = useScores();
  const { step } = useGameContext();

  return (
    <div className={styles.scores}>
      {scores.map((score, key) => {
        const active = key === step ? styles.active : '';
        const inactive = key < step ? styles.inactive : '';
        return (
          <div key={score} className={`${styles.score} ${active} ${inactive} `}>
            <svg className={styles.border} width="240" height="40" viewBox="0 0 240 40" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M13.4526 4.63788C15.6376 2.01596 18.8742 0.5 22.2872 0.5H217.713C221.126 0.5 224.362 2.01597 226.547 4.63788L239.349 20L226.547 35.3621C224.362 37.984 221.126 39.5 217.713 39.5H22.2872C18.8742 39.5 15.6376 37.984 13.4526 35.3621L0.650853 20L13.4526 4.63788Z"/>
            </svg>
            ${score.toLocaleString('en-US')}
          </div>
        );
      })}
    </div>
  );
};

export default Scores;
