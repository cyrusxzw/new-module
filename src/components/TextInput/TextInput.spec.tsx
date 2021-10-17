import React from 'react';
import { render } from '@testing-library/react';
import { axe } from 'jest-axe';
import { TextInput } from './TextInput';

describe('<TextInput />', () => {
  it('should render base component correctly', () => {
    const { container } = render(
      <TextInput data-test-ref="test-data-ref" id="test-textinput" />,
    );

    expect(container).toMatchSnapshot();
  });

  it('should be accessible with a correct label', async () => {
    const { container } = render(
      <TextInput
        data-test-ref="test-data-ref"
        id="test-textinput"
        label="label"
      />,
    );

    const results = await axe(container);

    expect(results).toHaveNoViolations();
  });

  it.skip('should be accessible with a placeholder attribute', async () => {
    const { container } = render(
      <TextInput data-test-ref="test-data-ref" id="test-textinput" />,
    );

    /** @TODO This component needs to be refactored to correctly (not)render label html */
    const results = await axe(container);

    expect(results).toHaveNoViolations();
  });
});
