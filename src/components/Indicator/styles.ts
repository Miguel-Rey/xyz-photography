import styled from 'styled-components';
import { IndicatorProps } from './types';

export const IndicatorIcon = styled.button<IndicatorProps>`
  position: relative;
  display: block;
  
  width: 5px;
  height: 8px;
  padding: 0;

  border-radius: 2px;
  border: 1px solid #FFFFFF;
  background: transparent;

  &::before {
    content: '';
    display: block;

    position: absolute;
    top: -1px;
    left: -1px;
    width: 100%;
    height: 100%;
    
    transition: transform 400ms ease-in-out;
    
    background-color: white;
    border-radius: 2px;
    border: 1px solid #FFFFFF;
    
    transform: ${props => props.active ? "scaleY(1)" : "scaleY(0)"};
    transform-origin: bottom;
  }
`;