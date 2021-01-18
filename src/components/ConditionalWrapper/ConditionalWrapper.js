import React from 'react';
import PropTypes from 'prop-types';

const ConditionalWrapper = ({
  alternateWrapper,
  children,
  condition,
  wrapper,
}) => {
  if (condition) return wrapper(children);

  return alternateWrapper ? alternateWrapper(children) : <>{children}</>;
};

ConditionalWrapper.propTypes = {
  /**
   * If the condition false, this functional component will be used instead of simply returning the childen unwrapped.
   */
  alternateWrapper: PropTypes.any,
  children: PropTypes.node.isRequired,
  /**
   * If this boolean prop resolves to true the children prop will be wrapped in the wrapper prop.
   */
  condition: PropTypes.bool.isRequired,
  /**
   * A functional component that recieves the children prop as an argument, `children => <div>{children}</div>`
   */
  wrapper: PropTypes.any.isRequired,
};

ConditionalWrapper.defaultProps = {
  alternateWrapper: undefined,
  children: undefined,
  condition: undefined,
  wrapper: undefined,
};

export { ConditionalWrapper };
