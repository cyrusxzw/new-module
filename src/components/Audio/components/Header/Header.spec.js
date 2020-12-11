import React from 'react';
import { render } from '@testing-library/react';
import { Header } from './Header';

describe('<Audio.Header />', () => {
  it('should be defined', () => {
    expect(Header).toBeDefined();
  });

  it('should render base component correctly', () => {
    const { container } = render(<Header artistName="foo" trackTitle="bar" />);

    expect(container).toMatchSnapshot();
  });
});
