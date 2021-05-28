import React from 'react';
import { render, screen } from '@testing-library/react';
import { TwoColumnLayout } from './TwoColumnLayout';
import { TwoColumnLayoutFixture } from './TwoColumnLayout.fixture';

describe('<TwoColumnLayout />', () => {
  it('should render two columns correctly', () => {
    render(<TwoColumnLayout content="content" sidebar="sidebar" />);

    expect(
      screen.queryByTestId(/data-testid-TwoColumnLayout/i),
    ).toBeInTheDocument();
    expect(screen.queryByRole('complementary')).toBeInTheDocument();
  });

  it('should render one column correctly when `sidebar` prop is not passed', () => {
    render(<TwoColumnLayout content="content" />);

    expect(screen.queryByRole('complementary')).not.toBeInTheDocument();
  });
});
