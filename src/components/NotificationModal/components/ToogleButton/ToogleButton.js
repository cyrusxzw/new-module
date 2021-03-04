import React from 'react';
import { Button } from '~/components/Button';
import { useNotificationContext } from '~/contexts/index.ts';

const ToogleButton = () => {
  const footerSuccessModal = useNotificationContext();
  const { actionType, dispatch } = footerSuccessModal;

  const handleOnClick = e => {
    e.preventDefault();
    dispatch({ type: actionType.SHOW_NOTIFICATION });
  };

  return (
    <Button onClick={handleOnClick} title="Show Notification">
      Show Notification
    </Button>
  );
};

export { ToogleButton };
