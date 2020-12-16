import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { useEscapeKeyListener } from './useEscapeKeyListener';

describe('useExecuteOnImpression', () => {
  const handleEscapeOnKeyPressMock = jest.fn();

  const ComponentWithHook = () => {
    useEscapeKeyListener(handleEscapeOnKeyPressMock);

    return <div>escape</div>;
  };

  beforeEach(() => {
    handleEscapeOnKeyPressMock.mockClear();
  });

  it('should run callback', () => {
    render(<ComponentWithHook />);

    expect(handleEscapeOnKeyPressMock).not.toHaveBeenCalled();

    userEvent.type(screen.getByText(/escape/i), '{esc}');

    expect(handleEscapeOnKeyPressMock).toHaveBeenCalledTimes(1);
  });

  it('should not run callback if another key is pressed', () => {
    render(<ComponentWithHook />);

    userEvent.type(screen.getByText(/escape/i), '{space}');

    expect(handleEscapeOnKeyPressMock).not.toHaveBeenCalled();
  });
});
