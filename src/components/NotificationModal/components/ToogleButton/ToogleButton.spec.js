import React from 'react';
import { render } from '@testing-library/react';
import { NotificationContextProvider } from '~/contexts';
import ToogleButton from './ToogleButton';

describe('<ToogleButton />', () => {
  it('should be defined', () => {
    expect(ToogleButton).toBeDefined();
  });

  it('should render base component correctly', () => {
    const { container } = render(
      <NotificationContextProvider>
        <ToogleButton />
      </NotificationContextProvider>,
    );

    expect(container).toMatchSnapshot();
  });
});
