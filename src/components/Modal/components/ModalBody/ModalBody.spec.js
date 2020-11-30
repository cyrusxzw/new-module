import React from 'react';
import { render } from '@testing-library/react';
import ModalBody from './ModalBody';
import ModalBodyFixture from './ModalBody.fixture';

const mockFn = jest.fn();

describe('<ModalBody />', () => {
  it('should be defined', () => {
    expect(ModalBody).toBeDefined();
  });

  it('renders base component correctly', () => {
    const { container } = render(
      <ModalBody copy={ModalBodyFixture.copy} isVisible={true} onClose={mockFn}>
        Body Content
      </ModalBody>,
    );

    expect(container).toMatchSnapshot();
  });

  describe('when clicking on the close button', () => {
    it.todo('should invoke handleClose');
    // const component = render(
    //   <ModalBody
    //     copy={ModalBodyFixture.copy}
    //     isVisible={true}
    //     onClose={mockFn}
    //   >
    //     Body Content
    //   </ModalBody>,
    // );
    //
    // const closeButton = component.root.findByProps({
    //   'data-test-ref': 'MODAL_CLOSE_BUTTON',
    // });
    //
    // closeButton.props.onClick();
    //
    // expect(mockFn).toHaveBeenCalled();
  });
});
