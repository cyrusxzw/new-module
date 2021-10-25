import React from 'react';
import { render } from '@testing-library/react';
import { ListItem } from './ListItem';
import { ListItemFixture } from './ListItem.fixture';

import * as collectionFile from '../Collection/Collection';
import * as nestedCollectionFile from '../NestedCollection/NestedCollection';
import * as promotionCardFile from '../../../PromotionCard/PromotionCard';
import * as linkFile from '../Link/Link';

jest.mock('~/components/GlobalNavigation/GlobalNavigation.context');

describe('<GlobalNavigation.MobileView.ListItem />', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should render base component correctly as nested collection', () => {
    jest
      .spyOn(nestedCollectionFile, 'NestedCollection')
      .mockImplementation(() => <div>nested collection</div>);

    /* ListItemFixture is a nested collection
     ** For mocking purposes, the above spy is provided
     */
    const { container } = render(<ListItem {...ListItemFixture} />);

    expect(container).not.toBeEmptyDOMElement();
  });

  it('should render collection', () => {
    const collectionSpy: jest.SpyInstance = jest
      .spyOn(collectionFile, 'Collection')
      .mockImplementation(() => <div>collection</div>);
    const collectionListItemFixture = { ...ListItemFixture };
    collectionListItemFixture.itemProps.type = 'collection';
    render(<ListItem {...collectionListItemFixture} />);

    expect(collectionSpy).toHaveBeenCalledTimes(1);
  });

  it('should render notable nested collection', () => {
    const nestedCollectionSpy: jest.SpyInstance = jest
      .spyOn(nestedCollectionFile, 'NestedCollection')
      .mockImplementation(() => <div>nested collection</div>);

    /* Having a notable or nested collection results in the same component being rendered
     ** i.e. The <NestedCollection /> component
     */
    const notableCollectionListItemFixture = { ...ListItemFixture };
    notableCollectionListItemFixture.itemProps.type =
      'notable-nested-collection';
    render(<ListItem {...notableCollectionListItemFixture} />);

    expect(nestedCollectionSpy).toHaveBeenCalledTimes(1);
  });

  it('should render promotion card', () => {
    const promotionCardSpy: jest.SpyInstance = jest
      .spyOn(promotionCardFile, 'PromotionCard')
      .mockImplementation(() => <div>promotion</div>);

    const promoCardListItemFixture = { ...ListItemFixture };
    promoCardListItemFixture.itemProps.type = 'promotion';
    render(<ListItem {...promoCardListItemFixture} />);

    expect(promotionCardSpy).toHaveBeenCalledTimes(1);
  });

  it('should render link', () => {
    const linkSpy: jest.SpyInstance = jest
      .spyOn(linkFile, 'Link')
      .mockImplementation(() => <div>link</div>);

    const linkListItemFixture = { ...ListItemFixture };
    linkListItemFixture.itemProps.type = 'link';
    render(<ListItem {...linkListItemFixture} />);

    expect(linkSpy).toHaveBeenCalledTimes(1);
  });
});
