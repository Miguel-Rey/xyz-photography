import React from 'react';
import { IndicatorProps } from './types';
import styled from 'styled-components';

const IndicatorIcon = styled.button<IndicatorProps>`
  width: 5px;
  height: 8px;
  padding: 0;

  border-radius: 2px;
  
  border: 1px solid #FFFFFF;
  background: ${props => props.active ? "white" : "transparent"};
`;

const Indicator: React.FC<IndicatorProps> = (props) => {
  const { active, onClick } = props;

  return <IndicatorIcon active={active} onClick={onClick} />
}

export default Indicator;