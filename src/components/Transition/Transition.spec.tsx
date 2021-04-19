import React from 'react';
import { render } from '@testing-library/react';
import { Transition } from './Transition';

describe('<Transition />', () => {
  it('should render base component correctly', () => {
    const { container } = render(
      <Transition isActive={true} type="fade">
        <div>Content</div>
      </Transition>,
    );

    expect(container).toMatchSnapshot();
  });
});
