import React from 'react';
import { render } from '@testing-library/react';
import { ListItem } from './ListItem';
import { ListItemFixture } from './ListItem.fixture';

import * as collectionFile from '../Collection/Collection';
import * as nestedCollectionFile from '../NestedCollection/NestedCollection';
import * as promotionCardFile from '../../../PromotionCard/PromotionCard';
import * as linkFile from '../Link/Link';

describe('<GlobalNavigation.MobileView.ListItem />', () => {
  const collectionSpy: jest.SpyInstance = jest
    .spyOn(collectionFile, 'Collection')
    .mockImplementation(() => <div>collection</div>);
  const nestedCollectionSpy: jest.SpyInstance = jest
    .spyOn(nestedCollectionFile, 'NestedCollection')
    .mockImplementation(() => <div>nested collection</div>);
  const promotionCardSpy: jest.SpyInstance = jest
    .spyOn(promotionCardFile, 'PromotionCard')
    .mockImplementation(() => <div>promotion</div>);
  const linkSpy: jest.SpyInstance = jest
    .spyOn(linkFile, 'Link')
    .mockImplementation(() => <div>link</div>);

  it('should render base component correctly as nested collection', () => {
    const { container } = render(<ListItem {...ListItemFixture} />);

    expect(container).toMatchSnapshot();
  });

  it('should render collection', () => {
    const collectionListItemFixture = { ...ListItemFixture };
    collectionListItemFixture.itemProps.type = 'collection';
    const { container } = render(<ListItem {...collectionListItemFixture} />);

    expect(container).toMatchSnapshot();
  });

  it('should render notable collection', () => {
    const notableCollectionListItemFixture = { ...ListItemFixture };
    notableCollectionListItemFixture.itemProps.type =
      'notable-nested-collection';
    const { container } = render(
      <ListItem {...notableCollectionListItemFixture} />,
    );

    expect(container).toMatchSnapshot();
  });

  it('should render promotion card', () => {
    const promoCardListItemFixture = { ...ListItemFixture };
    promoCardListItemFixture.itemProps.type = 'promotion';
    const { container } = render(<ListItem {...promoCardListItemFixture} />);

    expect(container).toMatchSnapshot();
  });

  it('should render link', () => {
    const linkListItemFixture = { ...ListItemFixture };
    linkListItemFixture.itemProps.type = 'link';
    const { container } = render(<ListItem {...linkListItemFixture} />);

    expect(container).toMatchSnapshot();
  });
});
