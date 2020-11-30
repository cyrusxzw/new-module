import React from 'react';
import renderer from 'react-test-renderer';
import TwoColumnLayout from './TwoColumnLayout';
import TwoColumnLayoutFixture from './TwoColumnLayout.fixture';

describe('<TwoColumnLayout />', () => {
  it('should be defined', () => {
    expect(TwoColumnLayout).toBeDefined();
  });

  it('renders base component correctly', () => {
    const tree = renderer
      .create(
        <TwoColumnLayout
          childrenClassNames={TwoColumnLayoutFixture.childrenClassNames}
          className={TwoColumnLayoutFixture.className}
          content={TwoColumnLayoutFixture.content}
          hasFullWidthContent={TwoColumnLayoutFixture.hasFullWidthContent}
          id={TwoColumnLayoutFixture.id}
          isReversed={TwoColumnLayoutFixture.isReversed}
          sidebar={TwoColumnLayoutFixture.sidebar}
        />,
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
