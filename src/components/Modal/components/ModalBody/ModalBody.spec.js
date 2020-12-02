import React from 'react';
import { fireEvent, render } from '@testing-library/react';
import ModalBody from './ModalBody';
import ModalBodyFixture from './ModalBody.fixture';

describe('<ModalBody />', () => {
  it('should be defined', () => {
    expect(ModalBody).toBeDefined();
  });

  it('should render component correctly and match html snapshot', () => {
    const mockFn = jest.fn();

    const { container } = render(
      <ModalBody copy={ModalBodyFixture.copy} isVisible={true} onClose={mockFn}>
        Body Content
      </ModalBody>,
    );

    expect(container).toMatchSnapshot();
  });

  it('should render content and fire the close button on click', () => {
    const handleOnClose = jest.fn();
    const copyClose = 'close';

    const { getByText, getByTitle } = render(
      <ModalBody
        copy={{ close: copyClose }}
        isVisible={true}
        onClose={handleOnClose}
      >
        test
      </ModalBody>,
    );

    expect(getByText('test')).toBeTruthy();

    fireEvent.click(getByTitle(copyClose));

    expect(handleOnClose).toHaveBeenCalledTimes(1);
  });
});
