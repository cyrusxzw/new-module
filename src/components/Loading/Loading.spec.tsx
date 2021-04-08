import React from 'react';
import { render } from '@testing-library/react';
import { Loading } from './Loading';

describe('<Loading />', () => {
  it('should render base component correctly', () => {
    const { container } = render(<Loading isLoading={true} />);

    expect(container).toMatchSnapshot();
  });
});
