import { LinkBoxProps } from "../LinkBox/types";

export type CoverProps = LinkBoxProps & {
  image: {
    src: string;
    alt?: string;
  }
  title: string;

  subtitle?: JSX.Element;  
}