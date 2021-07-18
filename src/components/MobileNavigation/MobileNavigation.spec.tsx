import React from 'react';
import { render, screen } from '@testing-library/react';
import { axe } from 'jest-axe';
import { MobileNavigation } from './MobileNavigation';
import { MobileNavigationFixture } from './MobileNavigation.fixture';

const items = [
  {
    id: 'skin-care',
    label: 'Skin Care',
    title: 'Skin Care',
    type: 'collection' as const,
    items: [
      {
        id: 'by-skin-type',
        label: 'By Skin Type',
        title: 'By Skin Type',
        type: 'nested-collection' as const,
        items: [
          {
            id: 'normal',
            label: 'Normal',
            title: 'Normal',
            type: 'link' as const,
            url: '#normal',
          },
          {
            id: 'dry',
            label: 'Dry',
            title: 'Dry',
            type: 'link' as const,
            url: '#dry',
          },
        ],
      },
    ],
  },
];

describe('<MobileNavigation />', () => {
  it('should render all items within nested elements', () => {
    render(
      <MobileNavigation
        isOpen={true}
        items={items}
        onCloseButtonClick={() => {
          return;
        }}
      />,
    );

    expect(
      screen.getByRole('navigation', { name: 'primary' }),
    ).toBeInTheDocument();

    // expect correct number of lists to be in the document

    // expect list items and buttons / links to be in the document
  });

  it.todo('should only show active menu on user interaction');

  it.todo('should reveal the correct sub list on click');

  it('should be accessible', async () => {
    const { container } = render(
      <MobileNavigation
        isOpen={true}
        items={MobileNavigationFixture.items}
        onCloseButtonClick={() => {
          return;
        }}
        secondaryItems={MobileNavigationFixture.secondaryItems}
      />,
    );

    const results = await axe(container);

    expect(results).toHaveNoViolations();
  });

  it.todo('should be keyboard accessible');
});
