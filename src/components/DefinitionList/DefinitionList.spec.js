import React from 'react';
import renderer from 'react-test-renderer';
import { render } from '@testing-library/react';
import DefinitionList from './DefinitionList';
import DefinitionListFixture from './DefinitionList.fixture';

describe('<DefinitionList />', () => {
  it('should be defined', () => {
    expect(DefinitionList).toBeDefined();
  });

  it('renders base component correctly', () => {
    const tree = renderer
      .create(<DefinitionList items={DefinitionListFixture.items} />)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

  it('should return `null` if the `items` prop is not a populated array', () => {
    const { container } = render(<DefinitionList items={[]} />);
    expect(container.firstChild).toBeNull();
  });
});
