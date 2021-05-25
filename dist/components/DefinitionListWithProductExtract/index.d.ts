import { FC } from 'react';
import { T as Themes } from '../../sharedChunks/Themes.types';
import { D as DefinitionListProps } from '../../sharedChunks/DefinitionList.types';

declare type DefinitionListWithProductExtractProps = {
    dataTestRef: string;
    isVisible?: boolean;
    itemBottomBorder?: boolean;
    productBottomBorder?: boolean;
    productItemNumber?: number;
    product?: {
        image?: any;
        name?: string;
        url?: string;
    };
    theme?: Themes;
    works?: string;
} & Pick<DefinitionListProps, 'items'>;

declare const DefinitionListWithProductExtract: FC<DefinitionListWithProductExtractProps>;

export { DefinitionListWithProductExtract };
