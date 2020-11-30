import React from 'react';
import { render, screen } from '@testing-library/react';
import AccordionFixture from './Accordion.fixture';
import Accordion from './Accordion';

jest.mock('react-accessible-accordion');

describe('<Accordion />', () => {
  it('should be defined', () => {
    expect(Accordion).toBeDefined();
  });

  it('renders base component correctly', () => {
    const { container } = render(
      <Accordion
        id={AccordionFixture.id}
        items={AccordionFixture.items}
        theme={AccordionFixture.theme}
      />,
    );

    expect(container).toMatchSnapshot();
  });

  it.todo('should render full Accordion with test data');

  it('should return `null` if the length of the `items` prop is 0', () => {
    render(<Accordion items={[]} />);

    const child = screen.queryByTestId('data-testid-Accordion');

    expect(child).not.toBeInTheDocument();
  });
});
