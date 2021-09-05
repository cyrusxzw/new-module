/* eslint-disable init-declarations */
import React from 'react';
import { render, screen } from '@testing-library/react';
import { Collection } from './Collection';
import { CollectionFixture } from './Collection.fixture';
import type { Promotion } from '~/components/GlobalNavigation/GlobalNavigation.types';
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
  it.todo('should assert something');

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

  const TestBed = ({
    backLabel,
    id,
    isVisible,
    promotion,
    shouldHideTopCollection,
  }: {
    backLabel?: string;
    id?: string;
    isVisible?: boolean;
    promotion?: Promotion;
    shouldHideTopCollection?: boolean;
  }) => {
    return (
      <GlobalNavigationStateContextProvider>
        <MobileViewContextProvider>
          <Collection
            {...CollectionFixture}
            backLabel={backLabel}
            id={id || CollectionFixture.id}
            isVisible={isVisible || CollectionFixture.isVisible}
            promotion={promotion}
            shouldHideTopCollection={shouldHideTopCollection}
          />
        </MobileViewContextProvider>
      </GlobalNavigationStateContextProvider>
    );
  };

  it('should render base component correctly', () => {
    const { container } = render(<TestBed />);

    expect(container).toMatchSnapshot();
  });

  it('should not render top collection', () => {
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

    const { activeCollectionId } = useGlobalNavigationStateContext();

    render(<TestBed id={activeCollectionId} />);

    const { setActiveCollectionId } = useGlobalNavigationStateContext();

    const buttons = screen.getAllByRole('button');
    const topCollectionButton = buttons[0];
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

    const topCollectionButton = screen.getAllByRole('button')[0];

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
  });

  it('should render promotion list item', () => {
    render(<TestBed promotion={CollectionFixture.promotion} />);

    expect(listItemSpy).toHaveBeenCalledTimes(2);
  });
});
