import React from 'react';
import { render } from '@testing-library/react';
import { Footer } from './Footer';

describe('<Audio.Footer />', () => {
  it('should be defined', () => {
    expect(Footer).toBeDefined();
  });

  it('should render base component correctly', () => {
    const { container } = render(
      <Footer artistName="foo" audioUrl="/" trackTitle="bar" />,
    );

    expect(container).toMatchSnapshot();
  });
});
