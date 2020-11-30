import React from 'react';
import { render } from '@testing-library/react';
import Transition from './Transition';

describe('<Transition />', () => {
  it('should be defined', () => {
    expect(Transition).toBeDefined();
  });

  it('renders base component correctly', () => {
    const { container } = render(
      <Transition isActive={true} type="fade">
        <div>Content</div>
      </Transition>,
    );

    expect(container).toMatchSnapshot();
  });
});
