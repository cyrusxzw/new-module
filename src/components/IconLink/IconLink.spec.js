import React from 'react';
import renderer from 'react-test-renderer';
import IconLink from './IconLink';
import IconLinkFixture from './IconLink.fixture';

describe('<IconLink />', () => {
  it('should be defined', () => {
    expect(IconLink).toBeDefined();
  });

  it('renders base component correctly', () => {
    const tree = renderer
      .create(
        <IconLink
          altText={IconLinkFixture[0].altText}
          dataTestRef="test-data-ref"
          hasTargetInNewWindow={true}
          height={25}
          icon={IconLinkFixture[0].icon}
          id={IconLinkFixture[0].altText}
          target={IconLinkFixture[0].target}
          width={25}
        />,
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
