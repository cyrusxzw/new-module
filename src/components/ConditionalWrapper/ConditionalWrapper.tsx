import React, { FC } from 'react';
import type { ConditionalWrapperProps } from './ConditionalWrapper.types.';

const ConditionalWrapper: FC<ConditionalWrapperProps> = ({
  alternateWrapper,
  children,
  condition,
  wrapper,
}) => {
  if (condition) return wrapper(children);

  return alternateWrapper ? alternateWrapper(children) : <>{children}</>;
};

export { ConditionalWrapper };
