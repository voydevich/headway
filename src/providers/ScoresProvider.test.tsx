import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import ScoresProvider, { useScores } from './ScoresProvider';

describe('ScoresProvider', () => {
  const MockChildComponent: React.FC = () => {
    const scores = useScores();

    return (
      <div data-testid="scores">
        {scores.map((score, index) => (
          <div key={index}>{score}</div>
        ))}
      </div>
    );
  };

  it('provides scores to its children via context', () => {
    const scores = [100, 200, 300];

    render(
      <ScoresProvider scores={scores}>
        <MockChildComponent />
      </ScoresProvider>,
    );

    expect(screen.getByTestId('scores')).toHaveTextContent('100');
    expect(screen.getByTestId('scores')).toHaveTextContent('200');
    expect(screen.getByTestId('scores')).toHaveTextContent('300');
  });
});
