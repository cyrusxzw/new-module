import React from 'react';
import { render } from '@testing-library/react';
import { IconLink } from './IconLink';
import { IconLinkFixture } from './IconLink.fixture';

describe('<IconLink />', () => {
  it('should render base component correctly', () => {
    const { container } = render(
      <IconLink
        altText={IconLinkFixture.items[0].altText}
        dataTestRef="test-data-ref"
        hasTargetInNewWindow={true}
        height={25}
        icon={IconLinkFixture.items[0].icon}
        id={IconLinkFixture.items[0].altText}
        target={IconLinkFixture.items[0].target}
        width={25}
      />,
    );

    expect(container).toMatchSnapshot();
  });
});
