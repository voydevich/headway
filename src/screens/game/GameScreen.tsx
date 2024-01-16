import styles from '../screen.module.scss';

import { FC, useCallback, useMemo, useState } from 'react';
import { useQuestion } from '@/providers/QuestionsProvider';
import { useGameContext } from '@/providers/GameProvider';
import AnswerButton from '@/components/buttons/AnswerButton';
import { getCorrect } from '@/actions/actions';
import Scores from '@/screens/game/scores/Scores';
import MenuButton from '@/components/buttons/MenuButton';

const GameScreen: FC = () => {
  const [menu, setMenu] = useState(false);
  const questions = useQuestion();
  const {
    step,
    setStep,
    setStatus,
  } = useGameContext();

  const question = useMemo(() => questions[step], [questions, step]);

  const next = useCallback((answerId: number) => {
    getCorrect(step, answerId)
      .then(({ isCorrect }) => {
        if (isCorrect) {
          setStep(step + 1);
        } else {
          setStatus('finish');
        }
      });
  }, [setStatus, setStep, step]);
  return (
    <div className={styles.game}>
      <MenuButton open={menu} onClick={() => setMenu(!menu)}/>
      <div className={styles.questionWrap}>
        <div className={styles.question}>
          <div className={styles.text}>
            {question.text}
          </div>
          <div className={styles.answers}>
            {question.answers.map((answer, key) => (
              <AnswerButton key={key} onClick={() => next(key)}>
                {answer.text}
              </AnswerButton>
            ))}
          </div>
        </div>
      </div>
      <Scores open={menu}/>
    </div>
  );
};

export default GameScreen;
