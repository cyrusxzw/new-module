import React from 'react';
import { S as SelectProps } from '../../sharedChunks/Select.types';
import '../../sharedChunks/Themes.types';

declare const Select: React.ForwardRefExoticComponent<SelectProps & React.RefAttributes<HTMLSelectElement>>;

export { Select };
