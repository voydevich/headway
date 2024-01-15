'use client';

import { FC } from 'react';
import WelcomeScreen from '@/app/screens/WelcomeScreen';
import GameScreen from '@/app/screens/GameScreen';
import FinishScreen from '@/app/screens/FinishScreen';
import { useGameContext } from '@/providers/GameProvider';

const HomePage: FC = () => {
  const { status } = useGameContext();
  return (
    <>
      {status === 'start' && <WelcomeScreen/>}
      {status === 'game' && <GameScreen/>}
      {status === 'finish' && <FinishScreen/>}
    </>
  );
};

export default HomePage;
