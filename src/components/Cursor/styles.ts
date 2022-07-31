import styled from 'styled-components';

export const PointerIcon = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 10;
  pointer-events: none;
  transform: translate(calc(var(--x) - 50%), calc(var(--y) - 50%));
`

export const CursorIcon = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 10;
  pointer-events: none;
  transform: translate(calc(var(--x) - 50%), calc(var(--y) - 50%)) rotateZ(-90deg);
  transition: transform 80ms ease-out;
`

export const AnimatedCircle = styled.circle`
  transition: stroke-dashoffset 400ms ease-in-out;
`