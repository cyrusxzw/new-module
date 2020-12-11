import React from 'react';
import { render } from '@testing-library/react';
import { Heading } from './Heading';

describe('<Heading />', () => {
  it('should be defined', () => {
    expect(Heading).toBeDefined();
  });

  it('should render base component correctly', () => {
    const { container } = render(
      <Heading level="1" size="large">
        Heading
      </Heading>,
    );

    expect(container).toMatchSnapshot();
  });

  it('renders level 2 size medium variation correctly', () => {
    const { container } = render(
      <Heading level="2" size="medium">
        Heading
      </Heading>,
    );

    expect(container).toMatchSnapshot();
  });

  it('renders level 4 size small variation correctly', () => {
    const { container } = render(
      <Heading level="4" size="small">
        Heading
      </Heading>,
    );

    expect(container).toMatchSnapshot();
  });
});
