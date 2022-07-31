import React, { useEffect, useRef } from 'react';
import { MovingBoxProps } from './types';
import { MovingDivWrapper, MovingDiv } from './styles';

const MovingBox: React.FC<MovingBoxProps> = (props) => {
  const { children, constrain = 20 } = props;
  const elementRef = useRef<HTMLDivElement>(null);

  const onMouseMove = (e: MouseEvent) => {
    const el = elementRef.current;
    if (el) {
      const box = el.getBoundingClientRect();
      const calcY = (e.clientY - box.y - (box.height / 2)) / constrain;
      const calcX = (e.clientX - box.x - (box.width / 2)) / constrain;
      
      el.style.setProperty('--distanceX', `${calcX}px`);
      el.style.setProperty('--distanceY', `${calcY}px`);
    }
  }

  useEffect(() => {
    window.addEventListener('mousemove', onMouseMove);
    return () => { window.removeEventListener('mousemove', onMouseMove)};
  }, []);

  return (
    <MovingDivWrapper ref={elementRef}>
      <MovingDiv>
        {children}
      </MovingDiv>
    </MovingDivWrapper>
  );
}

export default MovingBox;