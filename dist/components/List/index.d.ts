import React from 'react';
import { a as ListProps } from '../../sharedChunks/List.types';
import '../../sharedChunks/Themes.types';

declare const List: React.ForwardRefExoticComponent<ListProps & React.RefAttributes<HTMLUListElement>>;

export { List };
