import React from 'react';
import { render, screen } from '@testing-library/react';
import { SecondaryMessage } from './SecondaryMessage';

describe('<SecondaryMessage />', () => {
  it('should render two items correctly', () => {
    render(
      <SecondaryMessage
        items={[
          {
            copy: 'SecondaryMessage 1 copy',
            heading: 'SecondaryMessage 1 heading',
          },
          {
            copy: 'SecondaryMessage 2 copy',
            heading: 'SecondaryMessage 2 heading',
          },
        ]}
      />,
    );

    expect(screen.getAllByRole('heading').length).toEqual(2);
  });

  it('should render a Hyperlink wrapper if required', () => {
    render(
      <SecondaryMessage
        items={[
          {
            copy: 'SecondaryMessage copy',
            heading: 'SecondaryMessage heading',
            link: {
              title: 'SecondaryMessage link title',
              url: 'SecondaryMessage link url',
            },
          },
        ]}
      />,
    );

    expect(
      screen.getByRole('link', { name: 'SecondaryMessage link title' }),
    ).toBeInTheDocument();
  });

  it('should not render the UI if the `items` prop is not provided', () => {
    render(<SecondaryMessage />);

    expect(
      screen.queryByTestId(/data-testid-SecondaryMessage/i),
    ).not.toBeInTheDocument();
  });
});
