import type { ComponentWithoutChildren, Themes } from '~/types';

type BynderWidgetProps = {
  className?: string;
  heading: string;
  id: string;
  theme?: Themes;
};

type BynderWidgetType = ComponentWithoutChildren<BynderWidgetProps>;

export type { BynderWidgetProps, BynderWidgetType };
