import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { FlyinPanel } from './FlyinPanel';

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

    userEvent.click(screen.getByTitle(copyClose));

    expect(handleOnClose).toHaveBeenCalledTimes(1);
  });
});
