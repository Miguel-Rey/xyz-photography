import { CoverProps } from "../Cover/types"
import { LinkBoxProps } from "../LinkBox/types";

export type Slide = CoverProps & LinkBoxProps;

export type CarouselProps = {
  slides: Slide[],
  
  title?: string;
}

export type CarouselIndicatorProps = {
  active: number,
  total: number,
  connector?: string;
}

export type CarouselButtonProps = {
  image: string;
  onClick: () => void;

  onMouseEnter: () => void;

  onMouseLeave: () => void;

  isNextButton?: boolean;
}