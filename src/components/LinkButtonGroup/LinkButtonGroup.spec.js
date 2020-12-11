import React from 'react';
import { render, screen } from '@testing-library/react';
import { LinkButtonGroup } from './LinkButtonGroup';
import { Button } from '~/components/Button';

describe('<LinkButtonGroup />', () => {
  it('should be defined', () => {
    expect(LinkButtonGroup).toBeDefined();
  });

  it('renders children correctly', () => {
    const { container } = render(
      <LinkButtonGroup theme="light">
        <Button onClick={() => {}} title="test-button">
          Test
        </Button>
      </LinkButtonGroup>,
    );

    const child = screen.queryByTestId('data-testid-LinkButtonGroup');

    expect(container).toMatchSnapshot();
    expect(child).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'test-button' })).toBeTruthy();
  });

  it('should return `null` if no children were passed', () => {
    render(<LinkButtonGroup />);

    const child = screen.queryByTestId('data-testid-LinkButtonGroup');

    expect(child).not.toBeInTheDocument();
  });

  it('should return `null` if only a fragment was passed', () => {
    render(
      <LinkButtonGroup>
        <></>
      </LinkButtonGroup>,
    );

    const child = screen.queryByTestId('data-testid-LinkButtonGroup');

    expect(child).not.toBeInTheDocument();
  });

  it('should render correctly if first direct descendant is a fragment', () => {
    render(
      <LinkButtonGroup textAlign="right" theme="light">
        <>
          <Button onClick={() => {}} title="test-button">
            Test
          </Button>
        </>
      </LinkButtonGroup>,
    );

    const child = screen.queryByTestId('data-testid-LinkButtonGroup');

    expect(child).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'test-button' })).toBeTruthy();
  });
});
