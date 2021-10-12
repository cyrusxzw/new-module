import React from 'react';
import { render, screen } from '@testing-library/react';
import { NestedCollection } from './NestedCollection';
import { NestedCollectionFixture } from './NestedCollection.fixture';

import {
  GlobalNavigationStateContextProvider,
  useGlobalNavigationStateContext,
} from '~/components/GlobalNavigation/GlobalNavigation.context';
import {
  MobileViewContextProvider,
  useMobileViewContext,
} from '~/components/GlobalNavigation/components/MobileView/MobileView.context';

import * as listItemFile from '../ListItem/ListItem';

jest.mock('~/components/GlobalNavigation/GlobalNavigation.context');
jest.mock(
  '~/components/GlobalNavigation/components/MobileView/MobileView.context',
);

describe('<GlobalNavigation.MobileView.NestedCollection />', () => {
  it.todo('should assert something');

  let listItemSpy: jest.SpyInstance;

  const testGlobalNavigationStateContext = {
    activeCollectionId: 'top',
    setActiveCollectionId: jest.fn(),
    isOpen: false,
    setIsOpen: jest.fn(),
  };

  const testMobileViewContext = {
    setActiveNestedCollectionIds: jest.fn(),
    onNestedCollectionClick: jest.fn(),
    activeNestedCollectionIds: ['nested-collection'],
    closedTheme: 'dark',
  };

  beforeEach(() => {
    jest.clearAllMocks();
    (useGlobalNavigationStateContext as jest.Mock).mockReturnValue({
      ...testGlobalNavigationStateContext,
    });
    (useMobileViewContext as jest.Mock).mockReturnValue({
      ...testMobileViewContext,
    });
    listItemSpy = jest
      .spyOn(listItemFile, 'ListItem')
      .mockImplementation(() => null);
  });

  const TestBed = ({
    items,
    isVisible,
  }: {
    items?: any;
    isVisible?: boolean;
  }) => {
    return (
      <GlobalNavigationStateContextProvider>
        <MobileViewContextProvider>
          <NestedCollection
            {...NestedCollectionFixture}
            isVisible={isVisible}
            items={items}
          />
          ,
        </MobileViewContextProvider>
      </GlobalNavigationStateContextProvider>
    );
  };

  it('should render base component correctly', () => {
    const { container } = render(
      <TestBed items={NestedCollectionFixture.items} />,
    );

    expect(container).not.toBeEmptyDOMElement();
  });

  /* TODO{issue-2-nonFixture}: Fix broken test  */
  // it('should click on nested collection to expand it', () => {
  //   render(<TestBed items={NestedCollectionFixture.items} />);

  //   const nestedCollectionButton = screen.getByTitle('Nested Collection');

  //   nestedCollectionButton.click();
  //   const { onNestedCollectionClick } = useMobileViewContext();

  //   expect(onNestedCollectionClick).toHaveBeenCalledTimes(1);
  //   expect(listItemSpy).toHaveBeenCalledTimes(
  //     NestedCollectionFixture.items.length + 1,
  //   ); // TODO: Confirm why being called twice
  // });

  it('should have no items in nested collection', () => {
    render(<TestBed />);

    expect(listItemSpy).toHaveBeenCalledTimes(0);
  });

  it('should be tabbable', () => {
    (useGlobalNavigationStateContext as jest.Mock).mockReturnValue({
      activeCollectionId: 'skin',
    });
    render(<TestBed isVisible={true} />);

    const nestedCollectionButton = screen.getByRole('button');

    expect(nestedCollectionButton).not.toHaveAttribute('tabIndex');
  });
});
