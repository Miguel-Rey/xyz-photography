import React from 'react';
import { IndicatorProps } from './types';
import { IndicatorIcon } from './styles';

const Indicator: React.FC<IndicatorProps> = ({
  active, 
  onClick,
}) => (
  <IndicatorIcon active={active} onClick={onClick} />
);

export default Indicator;