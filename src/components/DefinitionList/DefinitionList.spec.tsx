import React from 'react';
import { render, screen } from '@testing-library/react';
import { DefinitionList } from './DefinitionList';
import { DefinitionListFixture } from './DefinitionList.fixture';

describe('<DefinitionList />', () => {
  it('should render base component correctly', () => {
    const { container } = render(
      <DefinitionList items={DefinitionListFixture.items} />,
    );

    expect(container).toMatchSnapshot();
  });

  it('should return `null` if the `items` prop is not a populated array', () => {
    render(<DefinitionList items={[]} />);

    const child = screen.queryByTestId(/data-testid-DefinitionList/i);

    expect(child).not.toBeInTheDocument();
  });
});
