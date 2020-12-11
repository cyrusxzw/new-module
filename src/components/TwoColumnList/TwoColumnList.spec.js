import React from 'react';
import { render } from '@testing-library/react';
import { TwoColumnList } from './TwoColumnList';
import { TwoColumnListFixture } from './TwoColumnList.fixture';

describe('<TwoColumnList />', () => {
  it('should be defined', () => {
    expect(TwoColumnList).toBeDefined();
  });

  it('should render base component correctly', () => {
    const { container } = render(
      <TwoColumnList
        leftColumn={TwoColumnListFixture.leftColumn}
        rightColumn={TwoColumnListFixture.rightColumn}
      />,
    );

    expect(container).toMatchSnapshot();
  });
});
