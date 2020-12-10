import React from 'react';
import { render } from '@testing-library/react';
import ConditionalWrapper from './ConditionalWrapper';

describe('<ConditionalWrapper />', () => {
  it('should be defined', () => {
    expect(ConditionalWrapper).toBeDefined();
  });

  it('should render base component correctly', () => {
    const { container } = render(
      <ConditionalWrapper
        condition={true}
        wrapper={children => <div className="wrapper">{children}</div>}
      >
        <span className="children">children</span>
      </ConditionalWrapper>,
    );

    expect(container).toMatchSnapshot();
  });

  it('renders children only is condition is false', () => {
    const { container } = render(
      <ConditionalWrapper
        condition={false}
        wrapper={children => <div className="wrapper">{children}</div>}
      >
        <span className="children">children</span>
      </ConditionalWrapper>,
    );

    expect(container).toMatchSnapshot();
  });

  it('renders alternateWrapper correctly', () => {
    const { container } = render(
      <ConditionalWrapper
        alternateWrapper={children => (
          <div className="alternateWrapper">{children}</div>
        )}
        condition={false}
        wrapper={children => <div className="wrapper">{children}</div>}
      >
        <span className="children">children</span>
      </ConditionalWrapper>,
    );

    expect(container).toMatchSnapshot();
  });
});
