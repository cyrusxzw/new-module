import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import FlyinPanel from './FlyinPanel';

describe('<FlyinPanel />', () => {
  const handleOnClose = jest.fn();
  const copyClose = 'close';

  it('should be defined', () => {
    expect(FlyinPanel).toBeDefined();
  });

  it('renders component correctly and fires the close button on click', () => {
    render(
      <FlyinPanel
        copy={{ close: copyClose }}
        isVisible={true}
        onClose={handleOnClose}
      >
        test
      </FlyinPanel>,
    );

    expect(screen.getByText('test')).toBeTruthy();
    expect(screen.getByRole('note')).toBeTruthy();

    fireEvent.click(screen.getByTitle(copyClose));

    expect(handleOnClose).toHaveBeenCalledTimes(1);
  });
});
