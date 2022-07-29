import React, { useEffect, useRef } from 'react';
import { CursorProps } from './types';
import { CursorIcon, AnimatedCircle } from './styles';

const Cursor: React.FC<CursorProps> = ({
  total,
  active,
  size = 42,
}) => {
  // const { active, total } = props;
  const IconRef = useRef<HTMLDivElement>(null);

  const radius = size / 2;
  const innerRadius = (size - 2) / 2;
  const dashArray = 2 * Math.PI * innerRadius;
  const dashOffset = dashArray - (dashArray * (active + 1) / total);


  const onMouseMove = (e: MouseEvent) => {
    const mouseY = e.clientY;
    const mouseX = e.clientX;
     
    if (IconRef.current) {
      IconRef.current.style.transform = `translate3d(calc(${mouseX}px - 50%), calc(${mouseY}px - 50%), 0)`;
    }
  }

  useEffect(() => {
    window.addEventListener('mousemove', onMouseMove);
    return () => { window.removeEventListener('mousemove', onMouseMove)};
  }, []);

  return (
    <CursorIcon ref={IconRef}>
      <svg     
        fill="none"
        width={size} 
        height={size} 
        viewBox={`0 0 ${size} ${size}`} 
      >
        <circle cx={radius} cy={radius} r="2" fill="white"/>
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
  )
}

export default Cursor;