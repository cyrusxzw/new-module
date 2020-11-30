import React from 'react';
import { render } from '@testing-library/react';
import LinkButtonGroup from './LinkButtonGroup';
import LinkButtonGroupFixture from './LinkButtonGroup.fixture';

describe('<LinkButtonGroup />', () => {
  it('should be defined', () => {
    expect(LinkButtonGroup).toBeDefined();
  });

  it('renders base component correctly', () => {
    const { container } = render(
      <LinkButtonGroup link={LinkButtonGroupFixture.link} />,
    );

    expect(container).toMatchSnapshot();
  });

  it('renders children correctly', () => {
    const { container } = render(
      <LinkButtonGroup theme="light">
        <a href="/au/r/about">Link</a>
      </LinkButtonGroup>,
    );

    expect(container).toMatchSnapshot();
  });
});
