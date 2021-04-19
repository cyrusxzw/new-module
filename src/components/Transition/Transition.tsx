import React, { isValidElement, ReactElement } from 'react';
import cx from 'classnames';
import get from 'lodash/get';
import { CSSTransition } from 'react-transition-group-npm';
import { useHasMounted } from '~/customHooks';
import { data } from './Transition.data';
import type { TransitionProps } from './Transition.types';

const Transition = ({
  children,
  isActive = false,
  isActiveOnMount = false,
  shouldMountOnEnter,
  shouldUnmountOnExit,
  type = 'fade',
}: TransitionProps): ReactElement | null => {
  const hasMounted = useHasMounted();

  if (!isValidElement(children)) {
    return null;
  }

  const isVisible = isActiveOnMount ? !!hasMounted : !!isActive;
  const classSet = cx(
    get(children, 'props.className', ''),
    isVisible ? '' : get(data[type], 'classNames.enter', ''),
  );

  return (
    <CSSTransition
      classNames={get(data[type], 'classNames', '')}
      in={isVisible}
      mountOnEnter={!!shouldMountOnEnter}
      timeout={get(data[type], 'timeout', 300)}
      unmountOnExit={!!shouldUnmountOnExit}
    >
      {React.cloneElement(children as ReactElement, {
        className: classSet,
      })}
    </CSSTransition>
  );
};

export { Transition };
