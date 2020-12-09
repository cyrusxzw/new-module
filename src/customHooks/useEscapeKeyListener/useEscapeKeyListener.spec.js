import React, { useState } from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import { useEscapeKeyListener } from './useEscapeKeyListener';

describe('useExecuteOnImpression', () => {
  // const [count, setCount] = useState(0);
  // const handleEscapeOnKeyPress = () => setCount(count => count + 1);
  const handleEscapeOnKeyPressMock = jest.fn();

  // eslint-disable-next-line react/prop-types
  const TestRig = () => {
    useEscapeKeyListener(handleEscapeOnKeyPressMock);

    return <div>hello word</div>;
  };

  it('should call handleEscapeOnKeyPress using the passed in options', () => {
    render(<TestRig />);

    fireEvent.keyDown(screen.getByText(/hello word/i), {
      key: 'Escape',
      code: 'Escape',
      keyCode: 27,
      charCode: 27,
    });

    expect(handleEscapeOnKeyPressMock).toHaveBeenCalledTimes(1);
  });
});
