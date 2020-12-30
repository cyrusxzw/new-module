import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Modal } from './Modal';

describe('<Modal />', () => {
  const handleOnClose = jest.fn();

  it('should be defined', () => {
    expect(Modal).toBeDefined();
  });

  it('renders component correctly and fires the close button on click', () => {
    render(
      <Modal
        copy={{ close: 'close modal copy' }}
        isVisible={true}
        onClose={handleOnClose}
      >
        modal test
      </Modal>,
    );

    expect(screen.getByText(/modal test/i)).toBeTruthy();
    expect(handleOnClose).not.toHaveBeenCalled();

    userEvent.click(screen.getByTitle(/close modal copy/i));

    expect(handleOnClose).toHaveBeenCalledTimes(1);
  });
});
