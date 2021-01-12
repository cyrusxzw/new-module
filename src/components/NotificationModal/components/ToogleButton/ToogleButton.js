import React from 'react';
import { Button } from '~/components/Button';
import { useNotificationContext } from '~/contexts';

const ToogleButton = () => {
  const footerSuccessModal = useNotificationContext();
  const { actionType, dispatch } = footerSuccessModal;

  const handleOnClick = e => {
    e.preventDefault();
    dispatch({ type: actionType });
  };

  return (
    <Button onClick={handleOnClick} title="Show Notification">
      Show Notification
    </Button>
  );
};

export { ToogleButton };
