import type { ComponentWithChildren } from '~/types';

type HiddenViewports = 'sm' | 'md' | 'lg' | 'xl';

type HiddenProps = {
  children: React.ReactNode;
  /** An array of strings representing viewports that the children components
   * will be unmounted on. 'sm' | 'md' | 'lg' | 'xl'.
   */
  when: HiddenViewports[];
};

type HiddenType = ComponentWithChildren<HiddenProps>;

export type { HiddenProps, HiddenType };
