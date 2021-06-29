import type { ComponentWithoutChildren, Themes } from '~/types';
import type { DefinitionListProps } from '../DefinitionList/DefinitionList.types';

type DefinitionListWithProductExtractProps = {
  dataTestRef: string;
  isVisible?: boolean;
  itemBottomBorder?: boolean;
  productBottomBorder?: boolean;
  productItemNumber?: number;
  product?: {
    // TODO: use definition in ProductExtract after it's migrated
    image?: any;
    name?: string;
    url?: string;
  };
  theme?: Themes;
  works?: string;
} & Pick<DefinitionListProps, 'items'>;

type DefinitionListWithProductExtractType = ComponentWithoutChildren<DefinitionListWithProductExtractProps>;

export type {
  DefinitionListWithProductExtractProps,
  DefinitionListWithProductExtractType,
};
