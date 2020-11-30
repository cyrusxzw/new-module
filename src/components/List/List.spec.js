import React from 'react';
import renderer from 'react-test-renderer';
import List from './List';

describe('Component - Element - List', () => {
  it('should be defined', () => {
    expect(List).toBeDefined();
  });

  it('renders base component correctly', () => {
    const tree = renderer
      .create(
        <List
          items={[
            { content: 'Fragrance', id: 'fragrance' },
            { content: 'Gifts', id: 'gifts' },
          ]}
          theme="dark"
        />,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
