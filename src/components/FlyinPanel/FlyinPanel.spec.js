import React from 'react';
import { render } from '@testing-library/react';
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
    const { container } = render(
      <FlyinPanel onClose={mockFn} title="title">
        Content
      </FlyinPanel>,
    );

    expect(container).toMatchSnapshot();
  });
});
