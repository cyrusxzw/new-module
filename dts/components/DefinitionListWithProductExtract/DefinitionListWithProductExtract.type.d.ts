import type { Themes } from '~/types';
import type { DefinitionListProps } from '../DefinitionList/DefinitionList.types';
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
export type { DefinitionListWithProductExtractProps };
