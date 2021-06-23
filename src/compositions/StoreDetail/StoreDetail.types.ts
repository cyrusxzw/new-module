import type { Themes, ComponentWithoutChildren } from '~/types';

type StoreDetailProps = {
  className?: string;
  theme?: Themes;
};

type StoreDetailType = ComponentWithoutChildren<StoreDetailProps>;

export type { StoreDetailType };
