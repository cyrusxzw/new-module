import React from 'react';
import { render, screen } from '@testing-library/react';
import { Message } from './Message';

describe('<Message />', () => {
  it('should present UI with heading copy', () => {
    render(<Message copy="message copy" heading="heading copy" />);

    expect(
      screen.getByRole('heading', { name: 'heading copy' }),
    ).toBeInTheDocument();
  });
});
