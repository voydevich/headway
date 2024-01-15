'use client';

import { createContext, FC, ReactNode, useContext } from 'react';
import { TScores } from '@/types';

const ScoresContext = createContext<TScores>([]);

export const useScores = () => useContext(ScoresContext);

const ScoresProvider: FC<{ children: ReactNode, scores: TScores }> = ({
  children,
  scores,
}) => {
  return (
    <ScoresContext.Provider value={scores}>
      {children}
    </ScoresContext.Provider>
  );
};

export default ScoresProvider;
