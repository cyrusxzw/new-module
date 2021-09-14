import { C as ComponentWithoutChildren } from '../../sharedChunks/Component.types';
import { D as DefinitionListProps } from '../../sharedChunks/DefinitionList.types';
import { T as Themes } from '../../sharedChunks/Themes.types';
import 'react';

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
declare type DefinitionListWithProductExtractType = ComponentWithoutChildren<DefinitionListWithProductExtractProps>;

declare const DefinitionListWithProductExtract: DefinitionListWithProductExtractType;

export { DefinitionListWithProductExtract };
