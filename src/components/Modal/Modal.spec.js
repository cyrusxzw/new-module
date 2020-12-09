import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Modal from './Modal';

describe('<Modal />', () => {
  const handleOnClose = jest.fn();
  const copyClose = 'close';

  it('should be defined', () => {
    expect(Modal).toBeDefined();
  });

  it('renders component correctly and fires the close button on click', () => {
    render(
      <Modal
        copy={{ close: copyClose }}
        isVisible={true}
        onClose={handleOnClose}
      >
        test
      </Modal>,
    );

    expect(screen.getByText('test')).toBeTruthy();
    expect(handleOnClose).toHaveBeenCalledTimes(0);

    userEvent.click(screen.getByTitle(copyClose));

    expect(handleOnClose).toHaveBeenCalledTimes(1);
  });
});
