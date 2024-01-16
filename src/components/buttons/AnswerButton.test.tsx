import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import AnswerButton from './AnswerButton';

describe('AnswerButton', () => {
  const text = 'Test text';
  it('renders without crashing', () => {
    const { getByText } = render(
      <AnswerButton state="" onClick={() => {
      }}>
        {text}
      </AnswerButton>,
    );
    const buttonElement = getByText(text);
    expect(buttonElement)
      .toBeInTheDocument();
  });

  it('calls onClick when button is clicked', () => {
    const onClickMock = jest.fn();
    const { getByText } = render(
      <AnswerButton state="" onClick={onClickMock}>
        {text}
      </AnswerButton>,
    );
    const buttonElement = getByText(text);
    fireEvent.click(buttonElement);
    expect(onClickMock)
      .toHaveBeenCalledTimes(1);
  });
});
