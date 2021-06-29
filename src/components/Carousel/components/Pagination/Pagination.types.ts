import type { ComponentWithoutChildren, Themes } from '~/types';

type PaginationProps = {
  dots?: any[];
  hasFlushPagination?: boolean;
  progressIndex?: number;
  theme?: Themes;
};

type PaginationType = ComponentWithoutChildren<PaginationProps>;

export type { PaginationProps, PaginationType };
