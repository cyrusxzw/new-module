import type { Themes, ComponentTypeBoilerplate } from '~/types';

type ComponentBoilerplateProps = {
  className?: string;
  theme?: Themes;
};

type ComponentBoilerplateType = ComponentTypeBoilerplate<ComponentBoilerplateProps>;

export type { ComponentBoilerplateType };
