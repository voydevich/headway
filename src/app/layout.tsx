import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.scss';
import { FC, ReactNode } from 'react';
import GameProvider from '@/providers/GameProvider';
import { getInitialData } from '@/actions/actions';
import ScoresProvider from '@/providers/ScoresProvider';
import QuestionsProvider from '@/providers/QuestionsProvider';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Who wants to be a millionaire?',
};

const RootLayout: FC<{ children: ReactNode }> = async ({ children }) => {
  const data = await getInitialData();

  return (
    <html lang="en">
    <body className={inter.className}>
    <ScoresProvider scores={data.scores}>
      <QuestionsProvider questions={data.questions}>
        <GameProvider>
          {children}
        </GameProvider>
      </QuestionsProvider>
    </ScoresProvider>
    </body>
    </html>
  );
};

export default RootLayout;
