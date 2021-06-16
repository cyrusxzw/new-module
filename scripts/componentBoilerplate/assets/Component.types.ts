import type { Themes, _COMPONENT_TYPE_ } from '~/types';

type _COMPONENT_NAME_Props = {
  className?: string;
  theme?: Themes;
};

type _COMPONENT_NAME_Type = _COMPONENT_TYPE_<_COMPONENT_NAME_Props>;

export type { _COMPONENT_NAME_Type };
