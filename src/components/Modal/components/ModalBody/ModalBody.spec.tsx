import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { ModalBody } from './ModalBody';
import { ModalBodyFixture } from './ModalBody.fixture';

describe('<ModalBody />', () => {
  it('should be defined', () => {
    expect(ModalBody).toBeDefined();
  });

  it('should render component correctly and match html snapshot', () => {
    const mockFn = jest.fn();

    const { container } = render(
      <ModalBody copy={ModalBodyFixture.copy} isVisible={true} onClose={mockFn}>
        modal body test
      </ModalBody>,
    );

    expect(container).toMatchSnapshot();
  });

  it('should render content and fire the close button on click', () => {
    const handleOnClose = jest.fn();

    render(
      <ModalBody
        copy={{ close: 'close modal body button' }}
        isVisible={true}
        onClose={handleOnClose}
      >
        modal body test
      </ModalBody>,
    );

    expect(screen.getByText(/modal body test/i)).toBeTruthy();

    userEvent.click(screen.getByTitle(/close modal body button/i));

    expect(handleOnClose).toHaveBeenCalledTimes(1);
  });
});
