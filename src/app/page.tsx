'use client';

import { FC } from 'react';
import WelcomeScreen from '@/screens/welcome/WelcomeScreen';
import GameScreen from '@/screens/game/GameScreen';
import FinishScreen from '@/screens/finish/FinishScreen';
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
