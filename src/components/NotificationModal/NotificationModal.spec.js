import React from 'react';
import { render } from '@testing-library/react';
import { NotificationContextProvider } from '~/contexts/index.ts';
import { NotificationModal } from './NotificationModal';
import { NotificationModalFixture } from './NotificationModal.fixture';

describe('<NotificationModal />', () => {
  it('should be defined', () => {
    expect(NotificationModal).toBeDefined();
  });

  it('should render base component correctly', () => {
    const { container } = render(
      <NotificationContextProvider>
        <NotificationModal
          backgroundColor="#d5d5cc"
          notificationMessage={NotificationModalFixture.notificationMessage}
        />
      </NotificationContextProvider>,
    );

    expect(container).toMatchSnapshot();
  });
});
