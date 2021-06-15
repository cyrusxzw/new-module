import React from 'react';
import { render, screen } from '@testing-library/react';
import { ComponentBoilerplate } from './ComponentBoilerplate';
import { ComponentBoilerplateFixture } from './ComponentBoilerplate.fixture';

describe('<ComponentBoilerplate />', () => {
  it.todo('should assert something', () => {
    render(<ComponentBoilerplate />);

    screen.debug();
  });
});
