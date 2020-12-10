import React from 'react';
import { render, screen } from '@testing-library/react';
import Transition from './Transition';

describe('<Transition />', () => {
  it('should be defined', () => {
    expect(Transition).toBeDefined();
  });

  it('should render base component correctly', () => {
    const { container } = render(
      <Transition isActive={true} type="fade">
        <div>Content</div>
      </Transition>,
    );

    expect(container).toMatchSnapshot();
  });

  it('should return null if child is not a valid element', () => {
    const { container } = render(
      <Transition isActive={true} type="fade">
        {1}
      </Transition>,
    );

    expect(container).toMatchSnapshot();
  });
});
