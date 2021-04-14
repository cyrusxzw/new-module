import React from 'react';
import { render } from '@testing-library/react';
import { Message } from './Message';
import { MessageFixture } from './Message.fixture';

describe('<Message />', () => {
  it('should render base component correctly', () => {
    const { container } = render(<Message {...MessageFixture} />);

    expect(container).toMatchSnapshot();
  });
});
