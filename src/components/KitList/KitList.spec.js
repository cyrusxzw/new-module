import React from 'react';
import { render } from '@testing-library/react';
import { KitList } from './KitList';
import { KitListFixture } from './KitList.fixture';

describe('<KitList />', () => {
  it('should be defined', () => {
    expect(KitList).toBeDefined();
  });

  it('should render base component correctly', () => {
    const { container } = render(<KitList items={KitListFixture.items} />);

    expect(container).toMatchSnapshot();
  });

  it.todo('should have the correct number of items');
});
