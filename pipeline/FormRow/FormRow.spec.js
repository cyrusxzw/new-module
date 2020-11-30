import React from 'react';
import { render } from '@testing-library/react';
import FormRow from './FormRow';

describe('<FormRow />', () => {
  it('should be defined', () => {
    expect(FormRow).toBeDefined();
  });

  it('renders base component correctly', () => {
    const { container } = render
      .create(
        <FormRow>
          <input name="password" type="password" />
        </FormRow>,
      )
      .toJSON();
    expect(container).toMatchSnapshot();
  });
});
