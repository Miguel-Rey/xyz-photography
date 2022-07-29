import { LinkBoxProps } from "../LinkBox/types";

export type ProjectCoverProps = LinkBoxProps & {
  image: {
    src: string;
    alt?: string;
  }
  title: string;

  subtitle?: string;  
}