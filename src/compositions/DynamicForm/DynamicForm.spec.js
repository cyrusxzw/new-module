import React from 'react';
import { render } from '@testing-library/react';
import { DynamicForm } from './DynamicForm';

describe('<DynamicForm />', () => {
  it('should be defined', () => {
    expect(DynamicForm).toBeDefined();
  });

  it('should render base component correctly', () => {
    const { container } = render(<DynamicForm />);

    expect(container).toMatchSnapshot();
  });
});
