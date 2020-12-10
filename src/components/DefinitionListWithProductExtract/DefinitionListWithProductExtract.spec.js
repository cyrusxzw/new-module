import React from 'react';
import { render } from '@testing-library/react';
import DefinitionListWithProductExtract from './DefinitionListWithProductExtract';

describe('<DefinitionListWithProductExtract />', () => {
  it('should be defined', () => {
    expect(DefinitionListWithProductExtract).toBeDefined();
  });

  it('should render base component correctly', () => {
    const { container } = render(
      <DefinitionListWithProductExtract dataTestRef="test_id" />,
    );

    expect(container).toMatchSnapshot();
  });
});
