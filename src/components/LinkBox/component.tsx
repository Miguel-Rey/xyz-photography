import React from 'react';
import { LinkBoxProps } from './types';
import {
  Box,
  Author,
  Date,
  Link,
} from './styles';


const LinkBox: React.FC<LinkBoxProps> = (props) => {
  const { author, date, anchor, href } = props;

  return (
    <Box>
      {author && <Author> { author }</Author>}

      {date && <Date> { date }</Date>}

      {(anchor && href) && (
        <Link href={href}>
          {anchor}
        </Link>
      )}
    </Box>
  )
}

export default LinkBox;