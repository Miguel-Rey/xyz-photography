import React, { useState, Children } from 'react';
import { CarouselProps } from './types';
import styled from 'styled-components';

const CarouselButton = styled.button`
  position: absolute;
`

const NextButton = styled(CarouselButton)`
  top: 16px;
  right: 16px;
`

const PrevButton = styled(CarouselButton)`
  bottom: 16px;
  left: 16px;
`

const Carousel: React.FC<CarouselProps> = (props) => {
  const { children, active } = props;
  const [activeSlide, setActiveSlide] = useState(active || 0);

  const goToNextSlide = () => {
    const nextSlide = activeSlide + 1 >= children.length ? 0 : activeSlide + 1;
    setActiveSlide(nextSlide);
  }

  const goToPreviousSlide = () => {
    const prevSlide = activeSlide - 1 < 0 ? children.length - 1 : activeSlide - 1;
    setActiveSlide(prevSlide);
  }

  return (
    <div>
      <PrevButton onClick={goToPreviousSlide}> Previous </PrevButton>

      {Children.toArray(children)[activeSlide]}
      
      <NextButton onClick={goToNextSlide}> Next </NextButton>
    </div>
  );
};

export default Carousel;