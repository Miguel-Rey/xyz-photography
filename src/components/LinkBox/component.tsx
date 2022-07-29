import React from 'react';
import { LinkBoxProps } from './types';
import styled from 'styled-components';

const Box = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
  padding: 0px;
  gap: 16px;
  max-width: 110px;

  color: #FFFFFF;
`

const Author = styled.p`
  font-family: 'Helvetica';
  font-style: normal;
  font-weight: 400;
  font-size: 10px;
  line-height: 120%;
  /* or 12px */

  letter-spacing: 0.08em;
  text-transform: uppercase;
`
const Date = styled(Author)`
  text-align: right;
`

const Link = styled.a`
  padding: 9px 16px 8px;
  background: #FFFFFF;
  border-radius: 24px;

  font-family: 'Helvetica';
  font-style: normal;
  font-weight: 700;
  font-size: 10px;
  line-height: 120%;

  letter-spacing: 0.08em;
  text-transform: uppercase;
  text-decoration: none;

color: #202020;
  color: #000;
`

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