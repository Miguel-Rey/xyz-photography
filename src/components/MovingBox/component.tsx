import React, { useEffect, useRef, useCallback } from 'react';
import { MovingBoxProps } from './types';
import { MovingDivWrapper, MovingDiv } from './styles';


const MovingBox: React.FC<MovingBoxProps> = (props) => {
  const { children, constrain = 20 } = props;
  const elementRef = useRef<HTMLDivElement>(null);
  
  const onMouseMove = useCallback((e: MouseEvent) => {
    const element = elementRef.current;
    if (element) {
      const box = element.getBoundingClientRect();
      const calcY = (e.clientY - box.y - (box.height / 2)) / constrain;
      const calcX = (e.clientX - box.x - (box.width / 2)) / constrain;
      
      element.style.setProperty('--distanceX', `${calcX}px`);
      element.style.setProperty('--distanceY', `${calcY}px`);
    }
  }, [constrain]);

  useEffect(() => {
    window.addEventListener('mousemove', onMouseMove);
    return () => { window.removeEventListener('mousemove', onMouseMove)};
  }, [onMouseMove]);

  return (
    <MovingDivWrapper ref={elementRef}>
      <MovingDiv>
        {children}
      </MovingDiv>
    </MovingDivWrapper>
  );
}

export default MovingBox;