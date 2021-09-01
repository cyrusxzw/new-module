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
    articleCardSpy = jest
      .spyOn(articleCardFile, 'ArticleCard')
      .mockImplementation(() => null);
  });

  it('should render base component correctly', () => {
    const { container } = render(<TestBed items={undefined} />);

    expect(container).toMatchSnapshot();
  });

  it('should render with items', () => {
    render(<TestBed items={ArticleListFixture.items} />);

    expect(articleCardSpy).toHaveBeenCalledTimes(
      ArticleListFixture.items.length,
    );
  });

  it('should render with items and show cards', () => {
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
