import React from 'react';
import renderer from 'react-test-renderer';
import FlyinPanel from './FlyinPanel';

jest.mock('uuid', () => {
  let value = 0;
  return {
    v4: () => value++,
  };
});

const mockFn = jest.fn();

describe('<FlyinPanel />', () => {
  it('should be defined', () => {
    expect(FlyinPanel).toBeDefined();
  });

  it('renders base component correctly', () => {
    const tree = renderer
      .create(
        <FlyinPanel onClose={mockFn} title="title">
          Content
        </FlyinPanel>,
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
