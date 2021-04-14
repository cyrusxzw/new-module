import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { FlyinPanel } from './FlyinPanel';

describe('<FlyinPanel />', () => {
  const handleOnClose = jest.fn();

  const props = {
    copy: { close: 'close flyin panel button' },
    heading: 'Ingredients',
    isVisible: true,
    onClose: handleOnClose,
  };

  it('renders component correctly and fires the close button on click', () => {
    render(<FlyinPanel {...props}>flyin panel</FlyinPanel>);

    expect(screen.getByText(/flyin panel/i)).toBeTruthy();
    expect(screen.getByRole('note')).toBeTruthy();

    userEvent.click(screen.getByTitle(/close flyin panel button/i));

    expect(handleOnClose).toHaveBeenCalledTimes(1);
  });

  it('should show heading if provided', () => {
    const { rerender } = render(
      <FlyinPanel {...props}>flyin panel</FlyinPanel>,
    );

    expect(screen.queryByText(/ingredients/i)).toBeInTheDocument();

    rerender(
      <FlyinPanel {...props} heading="">
        flyin panel
      </FlyinPanel>,
    );

    expect(screen.queryByText(/ingredients/i)).not.toBeInTheDocument();

    rerender(
      <FlyinPanel {...props} heading={undefined}>
        flyin panel
      </FlyinPanel>,
    );

    expect(screen.queryByText(/ingredients/i)).not.toBeInTheDocument();
  });
});
