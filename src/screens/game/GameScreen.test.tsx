import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import GameScreen from './GameScreen';
import QuestionsProvider from '@/providers/QuestionsProvider';
import GameProvider from '@/providers/GameProvider';

jest.mock('@/actions/actions', () => ({
  getCorrect: jest.fn(() => Promise.resolve({ isCorrect: true })),
}));

describe('GameScreen', () => {
  const mockQuestions = [{
    text: 'Question 1',
    answers: [{ text: 'Answer 1' }, { text: 'Answer 2' }],
  }];

  it('renders GameScreen with initial state', () => {
    render(
      <QuestionsProvider questions={mockQuestions}>
        <GameProvider>
          <GameScreen/>
        </GameProvider>
      </QuestionsProvider>,
    );
  });

  it('handles button click and updates state', async () => {
    render(
      <QuestionsProvider questions={mockQuestions}>
        <GameProvider>
          <GameScreen/>
        </GameProvider>
      </QuestionsProvider>,
    );

    const buttonElement = screen.getByText('Answer 1');

    (jest.requireMock('@/actions/actions').getCorrect as jest.Mock).mockResolvedValueOnce({ isCorrect: true });

    fireEvent.click(buttonElement);
  });

});
