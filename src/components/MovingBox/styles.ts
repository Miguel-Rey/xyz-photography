import styled from 'styled-components';

export const MovingDivWrapper = styled.div`
  position: relative;
`;

export const MovingDiv = styled.div`
    transition: transform 80ms ease-out;
    transform: translateX(var(--distanceX)) translateY(var(--distanceY)) ;
`;