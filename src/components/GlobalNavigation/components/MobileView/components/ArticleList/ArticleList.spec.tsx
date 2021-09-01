/* eslint-disable init-declarations */
import React from 'react';
import { render } from '@testing-library/react';
import { ArticleList } from './ArticleList';
import { ArticleListFixture } from './ArticleList.fixture';
import * as globalNavigationContextFile from '~/components/GlobalNavigation/GlobalNavigation.context';
import * as articleCardFile from '../ArticleCard/ArticleCard';

describe('<ArticleList />', () => {
  let useGlobalNavigationStateContextSpy: jest.SpyInstance;
  let articleCardSpy: jest.SpyInstance;

  const TestBed = ({ items }) => (
    <globalNavigationContextFile.GlobalNavigationStateContextProvider>
      <ArticleList items={items} />
    </globalNavigationContextFile.GlobalNavigationStateContextProvider>
  );

  beforeEach(() => {
    jest.clearAllMocks();
    useGlobalNavigationStateContextSpy = jest
      .spyOn(globalNavigationContextFile, 'useGlobalNavigationStateContext')
      .mockReturnValue({ isOpen: false, activeCollectionId: 'top' } as any);
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
    useGlobalNavigationStateContextSpy.mockReturnValue({
      isOpen: true,
      activeCollectionId: 'top',
    });

    render(<TestBed items={ArticleListFixture.items} />);

    expect(articleCardSpy).toHaveBeenCalledWith(
      expect.objectContaining({ isVisible: true }), // Props
      expect.anything(), // Context
    );
  });
});
