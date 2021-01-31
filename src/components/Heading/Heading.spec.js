import React from 'react';
import { render, screen } from '@testing-library/react';
import { Heading } from './Heading';

describe('<Heading />', () => {
  it('should be defined', () => {
    expect(Heading).toBeDefined();
  });

  it('should render base component correctly', () => {
    const { container } = render(
      <Heading level="1" size="large">
        test heading
      </Heading>,
    );

    const heading = screen.getByRole('heading', { name: /test heading/i });

    expect(heading).toBeInTheDocument();
    expect(container).toMatchSnapshot();
  });
});

describe('<Heading /> required props', () => {
  beforeAll(() => {
    jest.spyOn(global.console, 'error').mockImplementation(() => {});
  });

  afterAll(() => {
    global.console.error.mockRestore();
  });

  it('should return null and throw a prop error if children prop is missing', () => {
    render(<Heading level="1" size="large" />);

    const heading = screen.queryByRole('heading');

    expect(heading).not.toBeInTheDocument();
    expect(console.error).toHaveBeenCalledTimes(1); // eslint-disable-line no-console
  });
});
