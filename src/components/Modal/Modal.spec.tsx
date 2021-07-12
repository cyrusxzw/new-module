import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Modal } from './Modal';

describe('<Modal />', () => {
  const handleOnClose = jest.fn();

  it('renders component correctly and fires the close button on click', () => {
    const closeCopy = 'close modal copy';

    render(
      <Modal
        copy={{ close: closeCopy }}
        isVisible={true}
        onClose={handleOnClose}
      >
        modal test
      </Modal>,
    );

    expect(screen.getByText(/modal test/i)).toBeTruthy();
    expect(handleOnClose).not.toHaveBeenCalled();

    userEvent.click(screen.getByTitle(closeCopy));

    expect(handleOnClose).toHaveBeenCalledTimes(1);
  });

  it('should render modal only when `isVisible` prop is true', () => {
    const { rerender } = render(
      <Modal
        copy={{ close: 'close modal copy' }}
        isVisible={false}
        onClose={handleOnClose}
      >
        modal test
      </Modal>,
    );

    expect(screen.queryByRole('dialog')).not.toBeInTheDocument();

    rerender(
      <Modal
        copy={{ close: 'close modal copy' }}
        isVisible={true}
        onClose={handleOnClose}
      >
        modal test
      </Modal>,
    );

    expect(screen.getByRole('dialog')).toBeInTheDocument();
  });
});
