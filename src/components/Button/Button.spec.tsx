import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Button } from './Button';

describe('<Button />', () => {
  const handleOnClick = jest.fn();
  const buttonText = 'button';

  it('should render base component correctly with `onClick` prop', () => {
    const { container } = render(
      <Button className="class" onClick={handleOnClick} title="button-title">
        {buttonText}
      </Button>,
    );

    const button = screen.getByRole('button', { name: /button/i });

    expect(container).toMatchSnapshot();
    expect(button).toBeTruthy();
  });

  it('should return `null` if no children are passed', () => {
    render(
      <Button className="aesop" onClick={handleOnClick} title="button-title" />,
    );

    const button = screen.queryByRole('button', { name: /button/i });

    expect(button).not.toBeInTheDocument();
  });

  it('should call handle onClick callback if pressed', () => {
    render(
      <Button className="class" onClick={handleOnClick} title="button-title">
        {buttonText}
      </Button>,
    );

    const button = screen.getByRole('button', { name: /button/i });

    userEvent.click(button);

    expect(handleOnClick).toHaveBeenCalledTimes(1);
  });
});
