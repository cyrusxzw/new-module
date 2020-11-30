import React from 'react';
import renderer from 'react-test-renderer';
import DefinitionListWithProductExtract from './DefinitionListWithProductExtract';

describe('<DefinitionListWithProductExtract />', () => {
  it('should be defined', () => {
    expect(DefinitionListWithProductExtract).toBeDefined();
  });

  it('renders base component correctly', () => {
    const tree = renderer
      .create(<DefinitionListWithProductExtract dataTestRef="test_id" />)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
