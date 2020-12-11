import React from 'react';
import { render } from '@testing-library/react';
import { SecondaryMessage } from './SecondaryMessage';
import { SecondaryMessageFixture } from './SecondaryMessage.fixture';

describe('<SecondaryMessage />', () => {
  it('should be defined', () => {
    expect(SecondaryMessage).toBeDefined();
  });

  it('should render base component correctly', () => {
    const { container } = render(
      <SecondaryMessage {...SecondaryMessageFixture} />,
    );

    expect(container).toMatchSnapshot();
  });
});
