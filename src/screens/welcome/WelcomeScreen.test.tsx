import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import WelcomeScreen from './WelcomeScreen';
import GameProvider from '@/providers/GameProvider';

describe('WelcomeScreen', () => {
  it('renders WelcomeScreen with correct content', () => {
    render(
      <GameProvider>
        <WelcomeScreen/>
      </GameProvider>,
    );

    expect(screen.getByText('Who wants to be a millionaire?'))
      .toBeInTheDocument();
    expect(screen.getByText('Start'))
      .toBeInTheDocument();
  });
});
