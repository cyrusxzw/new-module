import React from 'react';

declare const mergeRefs: <Type = any>(...refs: (React.MutableRefObject<Type> | React.LegacyRef<Type>)[]) => (instance: Type) => void;

export { mergeRefs };
