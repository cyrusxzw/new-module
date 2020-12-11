import React from 'react';
import { render } from '@testing-library/react';
import { LoadMoreContextProvider } from '~/contexts';
import { LoadMoreButton } from './LoadMoreButton';
import { LoadMoreButtonFixture } from './LoadMoreButton.fixture';
import { mockOnClick as mockLoadMoreButtonOnClick } from './__mocks__/LoadMoreButton.onClick';

describe('<LoadMoreButton />', () => {
  it('should be defined', () => {
    expect(LoadMoreButton).toBeDefined();
  });

  it('should render base component correctly', () => {
    const { container } = render(
      <LoadMoreContextProvider onClick={mockLoadMoreButtonOnClick}>
        <LoadMoreButton
          className={LoadMoreButtonFixture.className}
          copy={LoadMoreButtonFixture.copy}
          dataTestRef={LoadMoreButtonFixture.dataTestRef}
          isEnabled={LoadMoreButtonFixture.isEnabled}
        />
      </LoadMoreContextProvider>,
    );

    expect(container).toMatchSnapshot();
  });
});
