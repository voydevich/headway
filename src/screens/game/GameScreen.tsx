import styles from '../screen.module.scss';

import { FC, useEffect, useMemo, useState } from 'react';
import { useQuestion } from '@/providers/QuestionsProvider';
import { useGameContext } from '@/providers/GameProvider';
import AnswerButton from '@/components/buttons/AnswerButton';
import { getCorrect } from '@/actions/actions';
import Scores from '@/screens/game/scores/Scores';
import MenuButton from '@/components/buttons/MenuButton';

const GameScreen: FC = () => {
  const [menu, setMenu] = useState(false);
  const initialSelectedState: { index?: number, state: 'selected' | 'wrong' | 'correct' | '' } = useMemo(() => ({ state: '' }), []);
  const [selected, setSelected] = useState(initialSelectedState);
  const questions = useQuestion();
  const {
    step,
    setStep,
    setStatus,
  } = useGameContext();

  const question = useMemo(() => questions[step], [questions, step]);
  useEffect(() => {
    setSelected(initialSelectedState);
  }, [initialSelectedState, question]);
  const next = (answerId: number) => {
    if (!selected.index) {
      setSelected({
        index: answerId,
        state: 'selected',
      });
      getCorrect(step, answerId)
        .then(({ isCorrect }) => {
          if (isCorrect) {
            setTimeout(() => {
              setSelected({
                index: answerId,
                state: 'correct',
              });
              setTimeout(() => {
                setStep(step + 1);
              }, 3000);
            }, 1000);
          } else {
            setTimeout(() => {

              setSelected({
                index: answerId,
                state: 'wrong',
              });
              setTimeout(() => {
                setStatus('finish');
              }, 3000);
            }, 1000);
          }
        });
    }
  };

  return (
    <div className={styles.game}>
      <MenuButton open={menu} onClick={() => setMenu(!menu)}/>
      <div className={styles.questionWrap}>
        <div className={styles.question}>
          <div className={styles.text}>
            {question.text}
          </div>
          <div className={styles.answers}>
            {question.answers.map((answer, key) => {
              const {
                index,
                state,
              } = selected;
              return (
                <AnswerButton
                  key={key}
                  onClick={() => next(key)}
                  state={key === index ? state : ''}
                >
                  {answer.text}
                </AnswerButton>
              );
            })}
          </div>
        </div>
      </div>
      <Scores open={menu}/>
    </div>
  );
};

export default GameScreen;
