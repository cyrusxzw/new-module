import React from 'react';
import renderer from 'react-test-renderer';
import FooterBlock from './FooterBlock';
import FooterBlockFixture from './FooterBlock.fixture';

describe('<FooterBlock />', () => {
  it('should be defined', () => {
    expect(FooterBlock).toBeDefined();
  });

  it('renders base component correctly', () => {
    const tree = renderer
      .create(
        <FooterBlock
          copy={FooterBlockFixture.blockNoLink.copy}
          theme="dark"
          title={FooterBlockFixture.blockNoLink.title}
        />,
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

  it('renders block navigation component correctly', () => {
    const tree = renderer
      .create(
        <FooterBlock
          isVisibleOnTabletAndMobile={false}
          links={FooterBlockFixture.navigation.links}
          theme="dark"
          title={FooterBlockFixture.navigation.title}
        />,
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
