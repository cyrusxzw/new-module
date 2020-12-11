import React from 'react';
import { render } from '@testing-library/react';
import { TextInput } from './TextInput';

describe('<TextInput />', () => {
  it('should be defined', () => {
    expect(TextInput).toBeDefined();
  });

  it('should render base component correctly', () => {
    const { container } = render(
      <TextInput data-test-ref="test-data-ref" id="test-textinput" />,
    );

    expect(container).toMatchSnapshot();
  });
});
