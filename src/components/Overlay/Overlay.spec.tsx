import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Overlay } from './Overlay';

describe('<Overlay />', () => {
  const handleOnClose = jest.fn();

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should render base component correctly', () => {
    const { container } = render(
      <Overlay isVisible={true} onClose={handleOnClose} />,
    );

    expect(container).toMatchSnapshot();
  });

  it('should call the onClose callback when the escape key is pressed', () => {
    render(<Overlay isVisible={true} onClose={handleOnClose} />);

    const overlay = screen.getByTestId(/data-testid-Overlay/i);

    expect(handleOnClose).not.toHaveBeenCalled();

    userEvent.type(overlay, '{esc}');

    expect(handleOnClose).toHaveBeenCalled();
  });

  it('should call the onClose callback when the overlay is clicked', () => {
    render(<Overlay isVisible={true} onClose={handleOnClose} />);

    const overlay = screen.getByTestId(/data-testid-Overlay/i);

    expect(handleOnClose).not.toHaveBeenCalled();

    userEvent.click(overlay);

    expect(handleOnClose).toHaveBeenCalledTimes(1);
  });
});
