import React, { useEffect, useRef } from 'react';
import { RotativeElementProps } from './types';
import { RotativeDiv, RotativeWrapper } from './styles';

const RotativeElement: React.FC<RotativeElementProps> = (props) => {
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
    <RotativeWrapper ref={elementRef}>
      <RotativeDiv>
        {children}
      </RotativeDiv>
    </RotativeWrapper>
  );
}

export default RotativeElement;