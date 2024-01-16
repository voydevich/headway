import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import MenuButton from './MenuButton';

jest.mock('@/components/svg/Close.svg', () => {
  const Close = () => <div data-testid="close-svg">CloseSvg</div>;
  return Close;
});
jest.mock('@/components/svg/Menu.svg', () => {
  const Menu = () => <div data-testid="menu-svg">MenuSvg</div>;
  return Menu;
});

describe('MenuButton', () => {
  it('renders MenuButton with MenuSvg when open is false', () => {
    render(<MenuButton open={false} onClick={() => {
    }}/>);

    const menuSvgElement = screen.getByTestId('menu-svg');
    expect(menuSvgElement)
      .toBeInTheDocument();
  });

  it('renders MenuButton with CloseSvg when open is true', () => {
    render(<MenuButton open={true} onClick={() => {
    }}/>);

    const closeSvgElement = screen.getByTestId('close-svg');
    expect(closeSvgElement)
      .toBeInTheDocument();
  });

  it('calls onClick when button is clicked', () => {
    const onClickMock = jest.fn();
    render(<MenuButton open={false} onClick={onClickMock}/>);

    const buttonElement = screen.getByRole('button');
    fireEvent.click(buttonElement);

    expect(onClickMock)
      .toHaveBeenCalledTimes(1);
  });
});
