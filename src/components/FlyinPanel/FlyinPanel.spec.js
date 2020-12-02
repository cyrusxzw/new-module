import React from 'react';
import { fireEvent, render } from '@testing-library/react';
import FlyinPanel from './FlyinPanel';

describe('<FlyinPanel />', () => {
  const handleOnClose = jest.fn();
  const copyClose = 'close';

  it('should be defined', () => {
    expect(FlyinPanel).toBeDefined();
  });

  it('renders component correctly and fires the close button on click', () => {
    const { getByText, getByTitle, getByRole } = render(
      <FlyinPanel
        copy={{ close: copyClose }}
        isVisible={true}
        onClose={handleOnClose}
      >
        test
      </FlyinPanel>,
    );

    expect(getByText('test')).toBeTruthy();

    expect(getByRole('note')).toBeTruthy();

    fireEvent.click(getByTitle(copyClose));

    expect(handleOnClose).toHaveBeenCalledTimes(1);
  });
});
