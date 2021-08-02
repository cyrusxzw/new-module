/// <reference types="react" />
import * as React from 'react';

declare const useTrapFocus: (shouldTrap?: boolean, query?: string) => React.MutableRefObject<any>[];

export { useTrapFocus };
