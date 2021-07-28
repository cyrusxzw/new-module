import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { TextInputV2 } from '.';

describe('<TextInputV2 />', () => {
  describe('onChange', () => {
    it('should call the onChange function when the input changes', () => {
      const emailAddress = 'bruce@batcave.com';
      const onChangeFunction = jest.fn();
      render(<TextInputV2 label="Email" onChange={onChangeFunction} />);
      const inputElement = screen.getByRole('textbox', { name: 'Email' });

      userEvent.type(inputElement, emailAddress);

      expect(onChangeFunction).toHaveBeenCalledTimes(emailAddress.length);
      expect(onChangeFunction).toHaveBeenCalledWith(expect.any(Object));
    });

    it('should function normally without an onChange function', () => {
      // covers the default noop onChange function
      render(<TextInputV2 label="Email" />);
      const inputElement = screen.getByRole('textbox', { name: 'Email' });

      userEvent.type(inputElement, 'test');

      expect(inputElement).toHaveValue('test');
    });
  });

  describe('Error state', () => {
    const errorMessage = 'bruce@batcave.com';

    beforeEach(() => {
      render(<TextInputV2 errorMessage={errorMessage} label="Email" />);
    });

    it('should style the input field if an error message is provided', () => {
      const inputElement = screen.getByRole('textbox', { name: 'Email' });

      expect(inputElement).toHaveClass('hasError');
    });

    it('should render the error message if it is provided', () => {
      const errorMessageElement = screen.getByText(errorMessage);

      expect(errorMessageElement).toBeInTheDocument();
      expect(errorMessageElement).toHaveClass('errorMessage');
    });
  });

  it('should not allow user input if the component is disabled', () => {
    const onChangeFunction = jest.fn();
    render(
      <TextInputV2
        isEnabled={false}
        label="Email"
        onChange={onChangeFunction}
      />,
    );
    const inputElement = screen.getByRole('textbox', { name: 'Email' });

    userEvent.type(inputElement, 'test');

    expect(onChangeFunction).toHaveBeenCalledTimes(0);
    expect(inputElement).toHaveValue('');
  });

  it('should render the predefined value if it is provided', () => {
    const emailAddress = 'bruce@batcave.com';
    render(<TextInputV2 label="Email" value={emailAddress} />);
    const inputElement = screen.getByRole('textbox', { name: 'Email' });

    expect(inputElement).toHaveValue(emailAddress);
  });
});
