import React from 'react';
import { render } from '@testing-library/react';
import List from './List';

describe('Component - Element - List', () => {
  it('should be defined', () => {
    expect(List).toBeDefined();
  });

  it('renders base component correctly', () => {
    const { container } = render(
      <List
        items={[
          { content: 'Fragrance', id: 'fragrance' },
          { content: 'Gifts', id: 'gifts' },
        ]}
        theme="dark"
      />,
    );

    expect(container).toMatchSnapshot();
  });

  it.todo('should have the correct number of items');
});
