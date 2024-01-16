import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import FinishScreen from './FinishScreen';
import { TGame, useGameContext } from '@/providers/GameProvider';

jest.mock('@/providers/GameProvider');

const mockUseGameContext = useGameContext as jest.MockedFunction<typeof useGameContext>;

describe('FinishScreen Component', () => {
  test('renders correctly with mock context values', () => {
    mockUseGameContext.mockReturnValue({
      score: 100,
      status: 'start',
      step: 0,
      lastStep: 11,
      setStep: jest.fn(),
      setStatus: jest.fn(),
      restart: jest.fn(),
    } as TGame);

    const { getByText } = render(<FinishScreen/>);

    // Assertions
    expect(getByText('Total score:'))
      .toBeInTheDocument();
    expect(getByText('$100 earned'))
      .toBeInTheDocument();
    expect(getByText('Try again'))
      .toBeInTheDocument();
  });

  test('calls restart function on button click', () => {
    // Set up mock context values
    const mockRestart = jest.fn();
    mockUseGameContext.mockReturnValue({
      score: 100,
      status: 'start',
      step: 0,
      lastStep: 11,
      setStep: jest.fn(),
      setStatus: jest.fn(),
      restart: mockRestart,
    });

    const { getByText } = render(<FinishScreen/>);

    // Click the "Try again" button
    fireEvent.click(getByText('Try again'));

    // Assertion
    expect(mockRestart)
      .toHaveBeenCalled();
  });
});
