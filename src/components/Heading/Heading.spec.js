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

  it('should not render component if no children were passed', () => {
    render(<Heading level="1" size="large" />);

    const heading = screen.queryByRole('heading');

    expect(heading).not.toBeInTheDocument();
  });
});
