import React from 'react';
import { render, screen } from '@testing-library/react';
import { Link } from './Link';
import { LinkFixture } from './Link.fixture';

describe('<GlobalNavigation.MobileView.Link />', () => {
  it.todo('should assert something');

  it('should render base component correctly', () => {
    const { container } = render(<Link {...LinkFixture} />);

    expect(container).toMatchSnapshot();
  });
});
