import React from 'react';
import { render } from '@testing-library/react';
import { ComponentBoilerplate } from './ComponentBoilerplate';
import { ComponentBoilerplateFixture } from './ComponentBoilerplate.fixture';

describe('<ComponentBoilerplate />', () => {
  it('should render base component correctly', () => {
    const { container } = render(<ComponentBoilerplate />);

    expect(container).toMatchSnapshot();
  });
});
