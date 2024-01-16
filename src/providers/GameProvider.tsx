'use client';

import { createContext, FC, ReactNode, useContext, useState } from 'react';
import { useScores } from '@/providers/ScoresProvider';
import { useQuestion } from '@/providers/QuestionsProvider';

export type TGame = {
  status: 'start' | 'game' | 'finish'
  step: number,
  lastStep: number
  score: number
  setStep: (step: TGame['step']) => void
  setStatus: (status: TGame['status']) => void
  restart: () => void
};

const GameContext = createContext<TGame>({
  status: 'start',
  step: 0,
  lastStep: 1,
  score: 0,
  setStep: () => null,
  setStatus: () => null,
  restart: () => null,
});

export const useGameContext = () => useContext(GameContext);

const GameProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const scores = useScores();
  const questions = useQuestion();
  const initialData = useGameContext();
  const [data, setData] = useState({
    ...initialData,
    lastStep: Math.min(questions.length, scores.length),
  });

  const setStatus = (status: TGame['status']) => {
    setData({
      ...data,
      status,
    });
  };

  const setStep = (step: TGame['step']) => {
    if (step === data.lastStep) {
      setData({
        ...data,
        status: 'finish',
        score: scores[step - 1] || 0,
      });
    } else {
      setData({
        ...data,
        step,
        score: scores[step - 1] || 0,
      });
    }
  };

  const restart = () => {
    setData({
      ...data,
      status: 'start',
      step: 0,
      score: 0,
    });
  };

  return (
    <GameContext.Provider value={{
      ...data,
      setStep,
      setStatus,
      restart,
    }}>
      {children}
    </GameContext.Provider>
  );
};

export default GameProvider;
