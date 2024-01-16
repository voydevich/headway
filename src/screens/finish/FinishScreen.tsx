import styles from '../screen.module.scss';
import { FC } from 'react';
import { useGameContext } from '@/providers/GameProvider';
import Button from '@/components/buttons/Button';
import HandSvg from '@/components/svg/Hand.svg';

const FinishScreen: FC = () => {
  const {
    score,
    restart,
  } = useGameContext();

  return (
    <div className={styles.finish}>
      <HandSvg/>
      <div className={styles.info}>
        <div className={styles.scoreWrap}>
          <div className={styles.label}>
            Total score:
          </div>
          <div className={styles.score}>
            ${score.toLocaleString('en-US')} earned
          </div>
        </div>
        <Button onClick={restart}>
          Try again
        </Button>
      </div>
    </div>
  );
};

export default FinishScreen;
