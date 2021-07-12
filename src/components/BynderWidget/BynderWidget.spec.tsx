import React from 'react';
import { act } from 'react-dom/test-utils';
import { render, screen } from '@testing-library/react';
import { BynderWidget } from './BynderWidget';

describe('<BynderWidget />', () => {
  it('should render base component correctly', async () => {
    const { container } = render(
      <BynderWidget
        heading="heading"
        id="6E8E63F9-7A54-442B-861E291124E19D94"
      />,
    );

    const heading = await screen.findByRole('heading', { name: /heading/i });

    expect(heading).toBeInTheDocument();
    expect(container).toMatchSnapshot();
  });

  it('should return null if useScript returns an error', async () => {
    render(
      <BynderWidget
        heading="heading"
        id="6E8E63F9-7A54-442B-861E291124E19D94"
      />,
    );

    const heading = await screen.findByRole('heading', { name: /heading/i });

    expect(heading).toBeInTheDocument();

    act(() => {
      // eslint-disable-next-line testing-library/no-node-access
      const el = document.querySelector('script');

      if (el) {
        el.dispatchEvent(new Event('error'));
      }
    });

    expect(heading).not.toBeInTheDocument();
  });
});
