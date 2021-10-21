import React from 'react';
import { render } from '@testing-library/react';
import { FooterBlock } from './FooterBlock';
import { FooterBlockFixture } from './FooterBlock.fixture';

describe('<FooterBlock />', () => {
  it('should render base component correctly', () => {
    const { container } = render(
      <FooterBlock copy={FooterBlockFixture.blockNoLink.copy} theme="dark" />,
    );

    expect(container).toMatchSnapshot();
  });

  it('renders block navigation component correctly', () => {
    const { container } = render(
      <FooterBlock
        isVisibleOnTabletAndMobile={false}
        links={FooterBlockFixture.navigation.links}
        theme="dark"
      />,
    );

    expect(container).toMatchSnapshot();
  });
});
