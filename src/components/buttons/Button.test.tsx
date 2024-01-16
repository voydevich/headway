import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Button from './Button';

describe('Button', () => {
  it('renders button with provided props', () => {
    render(<Button onClick={() => {
    }}>Click me</Button>);
    const buttonElement = screen.getByRole('button');
    expect(buttonElement)
      .toBeInTheDocument();
    expect(buttonElement)
      .toHaveAttribute('type', 'button');
    expect(buttonElement)
      .toHaveTextContent('Click me');
  });
});
