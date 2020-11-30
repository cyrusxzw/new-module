import React from 'react';
import renderer from 'react-test-renderer';
import { LoadMoreContextProvider } from '~/contexts';
import LoadMoreButton from './LoadMoreButton';
import LoadMoreButtonFixture from './LoadMoreButton.fixture';
import mockLoadMoreButtonOnClick from './__mocks__/LoadMoreButton.onClick';

describe('<LoadMoreButton />', () => {
  it('should be defined', () => {
    expect(LoadMoreButton).toBeDefined();
  });

  it('renders base component correctly', () => {
    const tree = renderer
      .create(
        <LoadMoreContextProvider onClick={mockLoadMoreButtonOnClick}>
          <LoadMoreButton
            className={LoadMoreButtonFixture.className}
            copy={LoadMoreButtonFixture.copy}
            dataTestRef={LoadMoreButtonFixture.dataTestRef}
            isEnabled={LoadMoreButtonFixture.isEnabled}
          />
        </LoadMoreContextProvider>,
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
