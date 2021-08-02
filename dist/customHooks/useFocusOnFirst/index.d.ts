/// <reference types="react" />
import * as React from 'react';

declare const useFocusOnFirst: (shouldUse?: boolean, query?: string) => React.MutableRefObject<any>[];

export { useFocusOnFirst };
