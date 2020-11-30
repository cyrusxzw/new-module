import React from 'react';
import { render } from '@testing-library/react';
import NotificationModal from './NotificationModal';
import NotificationModalFixture from './NotificationModal.fixture';

describe('<NotificationModal />', () => {
  it('should be defined', () => {
    expect(NotificationModal).toBeDefined();
  });

  it('renders base component correctly', () => {
    const { container } = render(
      <NotificationModal
        backgroundColor="#d5d5cc"
        notificationMessage={NotificationModalFixture.notificationMessage}
      />,
    );

    expect(container).toMatchSnapshot();
  });
});
