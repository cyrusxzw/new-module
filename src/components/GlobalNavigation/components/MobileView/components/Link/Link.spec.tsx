import React from 'react';
import { render, screen } from '@testing-library/react';
import { Link } from './Link';
import { LinkFixture } from './Link.fixture';

jest.mock('~/components/GlobalNavigation/GlobalNavigation.context');

describe('<GlobalNavigation.MobileView.Link />', () => {
  it('should render base component correctly', () => {
    const { container } = render(<Link {...LinkFixture} />);

    expect(container).not.toBeEmptyDOMElement();
  });

  it('should be tabbable', () => {
    render(<Link {...LinkFixture} isVisible={true} />);

    const link = screen.getByRole('link');
    expect(link).not.toHaveAttribute('tabIndex');
  });

  it('should be an external link', () => {
    render(<Link {...LinkFixture} isExternal={true} />);

    const externalLink = screen.queryByTestId('data-testid-Icon');

    expect(externalLink).not.toBeEmptyDOMElement();
  });
});
