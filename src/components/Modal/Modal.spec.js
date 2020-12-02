import React from 'react';
import { fireEvent, render } from '@testing-library/react';
import Modal from './Modal';

describe('<Modal />', () => {
  const handleOnClose = jest.fn();
  const copyClose = 'close';

  it('should be defined', () => {
    expect(Modal).toBeDefined();
  });

  it('should render component correctly and match html snapshot', () => {
    const { container } = render(
      <Modal
        copy={{ close: copyClose }}
        isVisible={true}
        onClose={handleOnClose}
      >
        test
      </Modal>,
    );

    expect(container).toMatchSnapshot();
  });

  it('renders component correctly and fires the close button on click', () => {
    const { getByText, getByTitle } = render(
      <Modal
        copy={{ close: copyClose }}
        isVisible={true}
        onClose={handleOnClose}
      >
        test
      </Modal>,
    );

    expect(getByText('test')).toBeTruthy();

    fireEvent.click(getByTitle(copyClose));

    expect(handleOnClose).toHaveBeenCalledTimes(1);
  });
});
