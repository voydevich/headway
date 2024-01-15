'use client';

import { createContext, FC, ReactNode, useContext } from 'react';
import { TQuestion } from '@/types';

const QuestionsContext = createContext<TQuestion[]>([]);

export const useQuestion = () => useContext(QuestionsContext);

const QuestionsProvider: FC<{ children: ReactNode, questions: TQuestion[] }> = ({
  children,
  questions,
}) => {
  return (
    <QuestionsContext.Provider value={questions}>
      {children}
    </QuestionsContext.Provider>
  );
};

export default QuestionsProvider;
