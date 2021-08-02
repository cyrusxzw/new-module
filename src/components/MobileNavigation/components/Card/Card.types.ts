import type { ComponentWithoutChildren } from '~/types';

type CardProps = {
  heading: string;
  isActive?: boolean;
  label: string;
  title: string;
  url: string;
  image?: {
    altText: string;
    sizes: {
      large?: string;
      medium?: string;
      small?: string;
      xLarge?: string;
      xSmall?: string;
    };
  };
};

type CardType = ComponentWithoutChildren<CardProps>;

export type { CardType };
