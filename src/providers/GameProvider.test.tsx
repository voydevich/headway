import React from 'react';
import { render, screen, act } from '@testing-library/react';
import '@testing-library/jest-dom';
import GameProvider, { useGameContext } from './GameProvider';


jest.mock('@/providers/ScoresProvider', () => ({ useScores: jest.fn(() => [0, 0, 0]) }));
jest.mock('@/providers/QuestionsProvider', () => ({ useQuestion: jest.fn(() => [{}, {}]) }));

describe('GameProvider', () => {
  const MockChildComponent: React.FC = () => {
    const { status, step, lastStep, score, setStep, setStatus, restart } = useGameContext();

    return (
      <div>
        <div data-testid="status">{status}</div>
        <div data-testid="step">{step}</div>
        <div data-testid="lastStep">{lastStep}</div>
        <div data-testid="score">{score}</div>
        <button onClick={() => setStep(1)} data-testid="setStepButton"></button>
        <button onClick={() => setStatus('game')} data-testid="setStatusButton"></button>
        <button onClick={restart} data-testid="restartButton"></button>
      </div>
    );
  };

  it('renders GameProvider with initial context values', () => {
    render(
      <GameProvider>
        <MockChildComponent />
      </GameProvider>,
    );

    expect(screen.getByTestId('status')).toHaveTextContent('start');
    expect(screen.getByTestId('step')).toHaveTextContent('0');
    expect(screen.getByTestId('lastStep')).toHaveTextContent('2'); // Assuming 2 questions in the mock
    expect(screen.getByTestId('score')).toHaveTextContent('0');
  });

  it('updates context values when setStep is called', () => {
    render(
      <GameProvider>
        <MockChildComponent />
      </GameProvider>,
    );

    const setStepButton = screen.getByTestId('setStepButton');

    act(() => {
      setStepButton.click();
    });

    expect(screen.getByTestId('step')).toHaveTextContent('1');
    expect(screen.getByTestId('score')).toHaveTextContent('0');
  });

  it('updates context values when setStatus is called', () => {
    render(
      <GameProvider>
        <MockChildComponent />
      </GameProvider>,
    );

    const setStatusButton = screen.getByTestId('setStatusButton');

    act(() => {
      setStatusButton.click();
    });

    expect(screen.getByTestId('status')).toHaveTextContent('game');
  });

  it('restarts the game when restart is called', () => {
    render(
      <GameProvider>
        <MockChildComponent />
      </GameProvider>,
    );

    const setStepButton = screen.getByTestId('setStepButton');
    const restartButton = screen.getByTestId('restartButton');

    act(() => {
      setStepButton.click();
    });
    act(() => {
      restartButton.click();
    });
    expect(screen.getByTestId('status')).toHaveTextContent('start');
    expect(screen.getByTestId('step')).toHaveTextContent('0');
    expect(screen.getByTestId('score')).toHaveTextContent('0');
  });
});
