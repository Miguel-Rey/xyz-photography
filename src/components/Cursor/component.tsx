import React from 'react';
import { CursorProps } from './types';
import { CursorIcon, AnimatedCircle, PointerIcon } from './styles';

const Cursor: React.FC<CursorProps> = ({
  total,
  active,
  size = 42,
}) => {
  const radius = size / 2;
  const innerRadius = (size - 2) / 2;
  const dashArray = 2 * Math.PI * innerRadius;
  const dashOffset = dashArray - (dashArray * (active + 1) / total);

  return (
    <div>
      <CursorIcon>
        <svg     
          fill="none"
          width={size} 
          height={size} 
          viewBox={`0 0 ${size} ${size}`} 
        >
          <circle opacity="0.1" cx={radius} cy={radius} r={innerRadius} stroke="white"/>
          <AnimatedCircle  
            cx={radius} 
            cy={radius}
            r={innerRadius}
            stroke="white"
            strokeDasharray={dashArray}
            strokeDashoffset={dashOffset}
          />
        </svg>
      </CursorIcon>

      <PointerIcon>
        <svg
          fill="none"
          width={size} 
          height={size} 
          viewBox={`0 0 ${size} ${size}`} 
        >
          <circle cx={radius} cy={radius} r="2" fill="white"/>
        </svg>
      </PointerIcon>
    </div>
  )
}

export default Cursor;