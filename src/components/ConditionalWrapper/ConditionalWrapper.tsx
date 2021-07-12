import React from 'react';
import type { ConditionalWrapperType } from './ConditionalWrapper.types';

const ConditionalWrapper: ConditionalWrapperType = ({
  alternateWrapper,
  children,
  condition,
  wrapper,
}) => {
  if (condition) return wrapper(children);

  return alternateWrapper ? alternateWrapper(children) : <>{children}</>;
};

export { ConditionalWrapper };
