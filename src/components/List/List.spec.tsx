import React from 'react';
import { render } from '@testing-library/react';
import { List } from './List';
import { ListFixture } from './List.fixture';

describe('<List />', () => {
  it('should be defined', () => {
    expect(List).toBeDefined();
  });

  it('should render base component correctly', () => {
    const { container } = render(
      <List items={ListFixture.items} theme="dark" />,
    );

    expect(container).toMatchSnapshot();
  });

  it.todo('should have the correct number of items');
});
