import React from 'react';
import { render } from '@testing-library/react';
import { Transition } from './Transition';

describe('<Transition />', () => {
  it('should be defined', () => {
    expect(Transition).toBeDefined();
  });

  it('should render base component correctly', () => {
    const { container } = render(
      <Transition isActive={true} type="fade">
        <div>Content</div>
      </Transition>,
    );

    expect(container).toMatchSnapshot();
  });
});

describe('<Transition /> required props', () => {
  beforeAll(() => {
    jest.spyOn(global.console, 'error').mockImplementation(() => {});
  });

  afterAll(() => {
    global.console.error.mockRestore();
  });

  it('should throw a prop error if child is not a valid element', () => {
    render(
      <Transition isActive={true} type="fade">
        {1}
      </Transition>,
    );

    expect(console.error).toHaveBeenCalledTimes(1); // eslint-disable-line no-console
  });
});
