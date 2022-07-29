import { CoverProps } from "../Cover/types"
import { LinkBoxProps } from "../LinkBox/types";

export type Slide = CoverProps & LinkBoxProps;

export type CarouselProps = {
  slides: Slide[],
  
  title?: string;
}