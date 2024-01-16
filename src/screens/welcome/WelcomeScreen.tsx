import styles from '../screen.module.scss';

import { FC } from 'react';
import Button from '@/components/buttons/Button';
import { useGameContext } from '@/providers/GameProvider';
import HandSvg from '@/components/svg/Hand.svg';

const WelcomeScreen: FC = () => {
  const { setStatus } = useGameContext();
  const onStart = () => {
    setStatus('game');
  };
  return (
    <div className={styles.welcome}>
      <HandSvg/>
      <div className={styles.info}>
        <h1 className={styles.title}>Who wants to be a millionaire?</h1>
        <Button onClick={onStart}>
          Start
        </Button>
      </div>
    </div>
  );
};

export default WelcomeScreen;
