import React from 'react';
import { render } from '@testing-library/react';
import Textarea from './Textarea';

describe('<Textarea />', () => {
  it('should be defined', () => {
    expect(Textarea).toBeDefined();
  });

  it('should render base component correctly', () => {
    const { container } = render(
      <Textarea dataTestRef="test-data-ref" id="test-textarea" />,
    );

    expect(container).toMatchSnapshot();
  });
});
