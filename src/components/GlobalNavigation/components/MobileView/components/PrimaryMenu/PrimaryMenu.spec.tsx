/* eslint-disable init-declarations */
import React from 'react';
import { render } from '@testing-library/react';
import { PrimaryMenu } from './PrimaryMenu';
import { PrimaryMenuFixture } from './PrimaryMenu.fixture';

import {
  GlobalNavigationStateContextProvider,
  useGlobalNavigationStateContext,
} from '~/components/GlobalNavigation/GlobalNavigation.context';

jest.mock('~/components/GlobalNavigation/GlobalNavigation.context');

import * as listItemFile from '../ListItem/ListItem';

describe('<GlobalNavigation.MobileView.PrimaryMenu />', () => {
  it.todo('should assert something');

  let listItemSpy: jest.SpyInstance;

  const testGlobalNavigationStateContext = {
    activeCollectionId: 'top',
    setActiveCollectionId: jest.fn(),
    isOpen: false,
    setIsOpen: jest.fn(),
  };

  beforeEach(() => {
    jest.clearAllMocks();
    (useGlobalNavigationStateContext as jest.Mock).mockReturnValue({
      ...testGlobalNavigationStateContext,
    });
    listItemSpy = jest
      .spyOn(listItemFile, 'ListItem')
      .mockImplementation(() => null);
  });

  const TestBed = ({ isVisible }: { isVisible?: boolean }) => {
    return (
      <GlobalNavigationStateContextProvider>
        <PrimaryMenu {...PrimaryMenuFixture} isVisible={isVisible} />,
      </GlobalNavigationStateContextProvider>
    );
  };

  it('should render base component correctly', () => {
    const { container } = render(<TestBed />);

    expect(container).toMatchSnapshot();
  });

  it('should make top level collections visible', () => {
    render(<TestBed isVisible={true} />);

    expect(listItemSpy).toHaveBeenCalledTimes(1);
  });
});
