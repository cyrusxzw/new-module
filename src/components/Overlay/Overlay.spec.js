import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Overlay } from './Overlay';

describe('<Overlay />', () => {
  const handleOnClose = jest.fn();

  it('should be defined', () => {
    expect(Overlay).toBeDefined();
  });

  it('should render base component correctly', () => {
    const { container } = render(
      <Overlay isVisible={true} onClose={handleOnClose} />,
    );

    expect(container).toMatchSnapshot();
  });

  it('should call the onClick callback when the escape key is pressed', () => {
    render(<Overlay isVisible={true} onClose={handleOnClose} />);

    expect(handleOnClose).not.toHaveBeenCalled();

    userEvent.type(screen.getByTestId(/data-testid-Overlay/i), '{esc}');

    expect(handleOnClose).toHaveBeenCalled();
  });
});
