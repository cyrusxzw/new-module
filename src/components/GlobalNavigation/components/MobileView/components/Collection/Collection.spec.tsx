/* eslint-disable init-declarations */
import React from 'react';
import { render, screen } from '@testing-library/react';
import { Collection } from './Collection';
import { CollectionFixture } from './Collection.fixture';
import {
  GlobalNavigationStateContextProvider,
  useGlobalNavigationStateContext,
} from '~/components/GlobalNavigation/GlobalNavigation.context';
import {
  MobileViewContextProvider,
  useMobileViewContext,
} from '~/components/GlobalNavigation/components/MobileView/MobileView.context';

import * as ListItemFile from '../ListItem/ListItem';

jest.mock('~/components/GlobalNavigation/GlobalNavigation.context');
jest.mock(
  '~/components/GlobalNavigation/components/MobileView/MobileView.context',
);

describe('<GlobalNavigation.MobileView.Collection />', () => {
  let listItemSpy: jest.SpyInstance;

  beforeEach(() => {
    jest.clearAllMocks();
    listItemSpy = jest
      .spyOn(ListItemFile, 'ListItem')
      .mockImplementation(() => null);
    (useGlobalNavigationStateContext as jest.Mock).mockReturnValue({
      activeCollectionId: CollectionFixture.id,
      setActiveCollectionId: jest.fn(),
    });
    (useMobileViewContext as jest.Mock).mockReturnValue({
      setActiveNestedCollectionIds: jest.fn(),
    });
  });

  const TestBed = (props) => {
    return (
      <GlobalNavigationStateContextProvider>
        <MobileViewContextProvider>
          <Collection {...CollectionFixture} {...props} />
        </MobileViewContextProvider>
      </GlobalNavigationStateContextProvider>
    );
  };

  it('should render base component correctly', () => {
    const { container } = render(<TestBed />);

    expect(container).not.toBeEmptyDOMElement();
  });

  it('should not render top collection when hidden', () => {
    render(<TestBed shouldHideTopCollection={true} />);
    const buttons = screen.getAllByRole('button');

    expect(buttons.length).toEqual(1);
    expect(buttons[0]).not.toHaveAttribute('title', CollectionFixture.title);
  });

  it('should change active collection id on clicking top level collection', () => {
    (useGlobalNavigationStateContext as jest.Mock).mockReturnValue({
      activeCollectionId: 'top',
      setActiveCollectionId: jest.fn(),
    });

    const {
      activeCollectionId,
      setActiveCollectionId,
    } = useGlobalNavigationStateContext();

    render(<TestBed id={activeCollectionId} />);

    const topCollectionButton = screen.getByTitle(CollectionFixture.title);
    topCollectionButton.click();

    expect(setActiveCollectionId).toHaveBeenCalledTimes(1);
  });

  it('should have tabbable top collection button if visible', () => {
    (useGlobalNavigationStateContext as jest.Mock).mockReturnValue({
      activeCollectionId: 'top',
      setActiveCollectionId: jest.fn(),
    });

    const { activeCollectionId } = useGlobalNavigationStateContext();
    render(<TestBed id={activeCollectionId} isVisible={true} />);

    const topCollectionButton = screen.getByTitle(CollectionFixture.title);

    expect(topCollectionButton).not.toHaveAttribute('tabIndex');
  });

  it('should not have tabbable collection back button if not active', () => {
    (useGlobalNavigationStateContext as jest.Mock).mockReturnValue({
      activeCollectionId: 'top',
      setActiveCollectionId: jest.fn(),
    });

    render(<TestBed />);

    const nestedCollectionButton = screen.getAllByRole('button', {
      hidden: true,
    })[1];

    expect(nestedCollectionButton).toHaveAttribute('tabIndex', '-1');
  });

  it('should return to top level collection by clicking back button', () => {
    render(<TestBed shouldHideTopCollection={true} />);

    const { setActiveNestedCollectionIds } = useMobileViewContext();

    const nestedCollectionButton = screen.getByRole('button');
    nestedCollectionButton.click();

    expect(setActiveNestedCollectionIds).toHaveBeenCalledTimes(1);
    expect(setActiveNestedCollectionIds).toHaveBeenCalledWith([]);
  });

  it('should render promotion list item', () => {
    render(<TestBed promotion={CollectionFixture.promotion} />);

    // Always either 1 or 0
    const promotionCount = CollectionFixture.promotion ? 1 : 0;

    const listItemCount = CollectionFixture.items.length + promotionCount;

    expect(listItemSpy).toHaveBeenCalledTimes(listItemCount);
  });
});
