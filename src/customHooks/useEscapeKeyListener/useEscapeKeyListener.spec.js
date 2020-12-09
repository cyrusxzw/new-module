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

  it('should call handleEscapeOnKeyPress with callback', () => {
    render(<ComponentWithHook />);

    userEvent.type(screen.getByText(/escape/i), '{esc}');

    expect(handleEscapeOnKeyPressMock).toHaveBeenCalledTimes(1);
  });
});
