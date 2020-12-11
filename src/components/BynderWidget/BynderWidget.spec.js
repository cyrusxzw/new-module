import React from 'react';
import { render } from '@testing-library/react';
import { BynderWidget } from './BynderWidget';

describe('<BynderWidget />', () => {
  it('should be defined', () => {
    expect(BynderWidget).toBeDefined();
  });

  it('should render base component correctly', () => {
    const { container } = render(
      <BynderWidget
        heading="Media Releases"
        id="6E8E63F9-7A54-442B-861E291124E19D94"
      />,
    );

    expect(container).toMatchSnapshot();
  });

  it('renders null if there is an error', () => {
    const { container } = render(
      <BynderWidget heading="Media Releases" id="" />,
    );

    expect(container).toMatchSnapshot();
  });
});
