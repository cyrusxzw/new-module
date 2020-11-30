import React from 'react';
import renderer from 'react-test-renderer';
import NotificationModal from './NotificationModal';
import NotificationModalFixture from './NotificationModal.fixture';

describe('<NotificationModal />', () => {
  it('should be defined', () => {
    expect(NotificationModal).toBeDefined();
  });

  it('renders base component correctly', () => {
    const tree = renderer
      .create(
        <NotificationModal
          backgroundColor="#d5d5cc"
          notificationMessage={NotificationModalFixture.notificationMessage}
        />,
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
