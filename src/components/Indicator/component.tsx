import React from 'react';
import { IndicatorProps } from './types';
import styled from 'styled-components';

const IndicatorIcon = styled.div<IndicatorProps>`
  width: 5px;
  height: 8px;

  border-radius: 2px;
  
  border: 1px solid #FFFFFF;
  background: ${props => props.active ? "white" : "transparent"};
`;

const Indicator: React.FC<IndicatorProps> = (props) => {
  const { active } = props;

  return <IndicatorIcon active={active} />
}

export default Indicator;