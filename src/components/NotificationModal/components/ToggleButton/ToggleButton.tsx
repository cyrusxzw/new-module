import React from 'react';
import type { SyntheticEvent } from 'react';
import { Button } from '~/components/Button';
import { useNotificationContext } from '~/contexts';

const ToggleButton = () => {
  const footerSuccessModal = useNotificationContext();
  const { actionType, dispatch } = footerSuccessModal;

  const handleOnClick = (event: SyntheticEvent) => {
    event.preventDefault();
    dispatch({ type: actionType.SHOW_NOTIFICATION });
  };

  return (
    <Button onClick={handleOnClick} title="Show Notification">
      Show Notification
    </Button>
  );
};

export { ToggleButton };
