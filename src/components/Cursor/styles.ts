import styled from 'styled-components';

export const CursorIcon = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 10;
  pointer-events: none;
  transform: translate(-50%, -50%);
`

export const AnimatedCircle = styled.circle`
  transition: stroke-dashoffset 400ms ease-in-out;
`