import React, { isValidElement } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import get from 'lodash/get';
import { CSSTransition } from 'react-transition-group-npm';
import { useHasMounted } from '~/customHooks';
import data from './Transition.data';

const Transition = ({
  children,
  hasCSSTransitionMountOnEnter,
  hasCSSTransitionUnmountOnExit,
  isActive,
  isActiveOnMount,
  type,
}) => {
  const hasMounted = useHasMounted();

  if (!isValidElement(children)) {
    return null;
  }

  const isVisible = isActiveOnMount ? !!hasMounted : !!isActive;

  return (
    <CSSTransition
      classNames={get(data[type], 'classNames', '')}
      in={isVisible}
      mountOnEnter={!!hasCSSTransitionMountOnEnter}
      timeout={get(data[type], 'timeout', 300)}
      unmountOnExit={!!hasCSSTransitionUnmountOnExit}
    >
      {React.cloneElement(children, {
        className: cx(
          get(children, 'props.className', ''),
          isVisible ? '' : get(data[type], 'classNames.enter', ''),
        ),
      })}
    </CSSTransition>
  );
};

Transition.propTypes = {
  children: PropTypes.element.isRequired,
  hasCSSTransitionMountOnEnter: PropTypes.bool,
  hasCSSTransitionUnmountOnExit: PropTypes.bool,
  isActive: PropTypes.bool,
  isActiveOnMount: PropTypes.bool,
  type: PropTypes.oneOf([
    'fade',
    'shiftInDown',
    'shiftInLeft',
    'shiftInUp',
    'slideDown',
    'slideRight',
    'slowFade',
    'zoom',
  ]),
};

Transition.defaultProps = {
  children: undefined,
  hasCSSTransitionMountOnEnter: undefined,
  hasCSSTransitionUnmountOnExit: undefined,
  isActive: false,
  isActiveOnMount: false,
  type: 'fade',
};

export default Transition;
