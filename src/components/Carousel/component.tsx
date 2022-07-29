import React, { useState } from 'react';
import { CarouselProps } from './types';
import styled from 'styled-components';
import { Thumbnail, ProjectCover } from '../index';

const CarouselButton = styled.button`
  position: absolute;
  padding: 0;
  background: none;
  border: none;
  cursor: pointer;
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
  const { slides, active } = props;
  const [activeSlide, setActiveSlide] = useState(active || 0);
  const nextIndex = (activeSlide + 1 >= slides.length) ? 0 : activeSlide + 1;
  const prevIndex = (activeSlide - 1 < 0) ? slides.length - 1 : activeSlide - 1;

  return (
    <div>
      <ProjectCover {...slides[activeSlide]} />      

      <PrevButton onClick={() => setActiveSlide(prevIndex)}>
        <Thumbnail src={slides[prevIndex]?.image?.src} />
      </PrevButton>
      <NextButton onClick={() => setActiveSlide(nextIndex)}>
        <Thumbnail src={slides[nextIndex]?.image?.src} />
      </NextButton>
    </div>
  );
};

export default Carousel;