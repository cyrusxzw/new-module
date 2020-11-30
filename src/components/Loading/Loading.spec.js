import React from 'react';
import { render } from '@testing-library/react';
import Loading from './Loading';

describe('<Loading />', () => {
  it('should be defined', () => {
    expect(Loading).toBeDefined();
  });

  it('renders base component correctly', () => {
    const { container } = render(<Loading isLoading={true} />);

    expect(container).toMatchSnapshot();
  });
});
