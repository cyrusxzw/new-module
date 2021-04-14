import React from 'react';
import { render } from '@testing-library/react';
import { DefinitionList } from '~/components/DefinitionList';
import { Image } from '~/components/Image';
import { MediaWithContent } from './MediaWithContent';
import { MediaWithContentFixture } from './MediaWithContent.fixture';

describe('<MediaWithContent />', () => {
  it('should render base component correctly', () => {
    const { container } = render(
      <MediaWithContent
        content={
          <DefinitionList
            items={MediaWithContentFixture.definitionList.items}
          />
        }
        copy={MediaWithContentFixture.copy.expectations}
        media={<Image {...MediaWithContentFixture.image.default} />}
      />,
    );

    expect(container).toMatchSnapshot();
  });
});
