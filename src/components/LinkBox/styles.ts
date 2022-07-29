import styled from 'styled-components';

export const Box = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
  padding: 0px;
  gap: 16px;
  max-width: 110px;

  color: #FFFFFF;
`

export const Author = styled.p`
  font-family: 'Helvetica';
  font-style: normal;
  font-weight: 400;
  font-size: 10px;
  line-height: 120%;
  /* or 12px */

  letter-spacing: 0.08em;
  text-transform: uppercase;
`
export const Date = styled(Author)`
  text-align: right;
`

export const Link = styled.a`
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