import React from 'react';
import { render } from '@testing-library/react';
import SubNav from './SubNav';
import SubNavFixture from './SubNav.fixture';

describe('<SubNav />', () => {
  it('should be defined', () => {
    expect(SubNav).toBeDefined();
  });

  it('should render base component correctly', () => {
    const { container } = render(
      <SubNav
        heading={SubNavFixture.heading}
        id={SubNavFixture.id}
        links={SubNavFixture.links}
      />,
    );

    expect(container).toMatchSnapshot();
  });

  it('renders without heading if no `heading` prop is passed', () => {
    const { container } = render(<SubNav links={SubNavFixture.links} />);

    expect(container).toMatchSnapshot();
  });
});
