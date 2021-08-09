import React from 'react';
import { D as DefinitionListProps } from '../../sharedChunks/DefinitionList.types';
import '../../sharedChunks/Themes.types';

declare const DefinitionList: React.ForwardRefExoticComponent<DefinitionListProps & React.RefAttributes<HTMLDListElement>>;

export { DefinitionList };
