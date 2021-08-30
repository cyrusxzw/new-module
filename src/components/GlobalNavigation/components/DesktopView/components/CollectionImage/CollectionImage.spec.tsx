import React from 'react';
import { render } from '@testing-library/react';
import { axe } from 'jest-axe';
import { CollectionImage } from './CollectionImage';
import { CollectionImageFixture } from './CollectionImage.fixture';

describe('<CollectionImage />', () => {
  it('should be accessible', async () => {
    const { container } = render(
      <CollectionImage
        altText={CollectionImageFixture.altText}
        sizes={CollectionImageFixture.sizes}
      />,
    );

    const results = await axe(container);

    expect(results).toHaveNoViolations();
  });
});
