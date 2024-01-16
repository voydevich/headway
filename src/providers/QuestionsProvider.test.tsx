import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import QuestionsProvider, { useQuestion } from './QuestionsProvider';

describe('QuestionsProvider', () => {
  const MockChildComponent: React.FC = () => {
    const questions = useQuestion();

    return (
      <div data-testid="questions">
        {questions.map((question, index) => (
          <div key={index}>{question.text}</div>
        ))}
      </div>
    );
  };

  it('provides questions to its children via context', () => {
    const questions = [
      { text: 'Question 1', answers: [] },
      { text: 'Question 2', answers: [] },
    ];

    render(
      <QuestionsProvider questions={questions}>
        <MockChildComponent />
      </QuestionsProvider>,
    );

    expect(screen.getByTestId('questions')).toHaveTextContent('Question 1');
    expect(screen.getByTestId('questions')).toHaveTextContent('Question 2');
  });
});
