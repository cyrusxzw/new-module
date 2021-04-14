import React from 'react';
import { render } from '@testing-library/react';
import { TwoColumnLayout } from './TwoColumnLayout';
import { TwoColumnLayoutFixture } from './TwoColumnLayout.fixture';

describe('<TwoColumnLayout />', () => {
  it('should render base component correctly', () => {
    const { container } = render(
      <TwoColumnLayout
        childrenClassNames={TwoColumnLayoutFixture.childrenClassNames}
        className={TwoColumnLayoutFixture.className}
        content={TwoColumnLayoutFixture.content}
        hasFullWidthContent={TwoColumnLayoutFixture.hasFullWidthContent}
        id={TwoColumnLayoutFixture.id}
        isReversed={TwoColumnLayoutFixture.isReversed}
        sidebar={TwoColumnLayoutFixture.sidebar}
      />,
    );

    expect(container).toMatchSnapshot();
  });
});
