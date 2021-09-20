/* eslint-disable init-declarations */
import React from 'react';
import { render } from '@testing-library/react';
import { ArticleList } from './ArticleList';
import { ArticleListFixture } from './ArticleList.fixture';
import {
  GlobalNavigationStateContextProvider,
  useGlobalNavigationStateContext,
} from '~/components/GlobalNavigation/GlobalNavigation.context';
import * as articleCardFile from '../ArticleCard/ArticleCard';

jest.mock('~/components/GlobalNavigation/GlobalNavigation.context');

describe('<ArticleList />', () => {
  let articleCardSpy: jest.SpyInstance;

  const TestBed = ({ items }) => (
    <GlobalNavigationStateContextProvider>
      <ArticleList items={items} />
    </GlobalNavigationStateContextProvider>
  );

  beforeEach(() => {
    jest.clearAllMocks();
    (useGlobalNavigationStateContext as jest.Mock).mockReturnValue({
      isOpen: false,
      activeCollectionId: 'top',
    });
    articleCardSpy = jest
      .spyOn(articleCardFile, 'ArticleCard')
      .mockImplementation(() => null);
  });

  it('should render base component correctly', () => {
    const { container } = render(<TestBed {...ArticleListFixture} />);

    expect(container).not.toBeEmptyDOMElement();
  });

  it('should not render base when items is undefined', () => {
    const { container } = render(<TestBed items={undefined} />);

    expect(container).toBeEmptyDOMElement();
  });

  it('should render component when items provided', () => {
    render(<TestBed items={ArticleListFixture.items} />);

    expect(articleCardSpy).toHaveBeenCalledTimes(
      ArticleListFixture.items.length,
    );
  });

  it('should render with items and show cards when open and active collection', () => {
    (useGlobalNavigationStateContext as jest.Mock).mockReturnValue({
      isOpen: true,
      activeCollectionId: 'top',
    });

    render(<TestBed items={ArticleListFixture.items} />);

    expect(articleCardSpy).toHaveBeenCalledWith(
      expect.objectContaining({ isVisible: true }),
      expect.anything(),
    );
  });

  it('should render with items and not show cards as active collection not on top', () => {
    (useGlobalNavigationStateContext as jest.Mock).mockReturnValue({
      isOpen: true,
      activeCollectionId: 'Skin',
    });

    render(<TestBed items={ArticleListFixture.items} />);

    expect(articleCardSpy).toHaveBeenCalledWith(
      expect.objectContaining({ isVisible: false }),
      expect.anything(),
    );
  });
});
