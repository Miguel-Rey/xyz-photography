import React from 'react';
import { IndicatorProps } from './types';
import { IndicatorIcon } from './styles';

const Indicator: React.FC<IndicatorProps> = (props) => {
  const { active, onClick } = props;

  return <IndicatorIcon active={active} onClick={onClick} />
}

export default Indicator;