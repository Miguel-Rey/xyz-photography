import styled from 'styled-components';

export const RotativeWrapper = styled.div`
  position: relative;
`;

export const RotativeDiv = styled.div`
    transition: transform 80ms ease-out;
    transform: translateX(var(--distanceX)) translateY(var(--distanceY)) ;
`;