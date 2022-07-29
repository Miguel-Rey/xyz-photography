import React, { useState } from 'react';
import { CarouselProps } from './types';
import styled from 'styled-components';
import { Thumbnail, ProjectCover, Indicator } from '../index';

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

const CarouselTitle = styled.h1`
  position: absolute;
  left: 16px;
  top: 16px;

  font-family: 'Tungsten';
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
  letter-spacing: 0.08em;
  text-transform: uppercase;

  color: #FFFFFF;
`

const IndicatorWrapper = styled.span`
  display: flex;
  gap: 8px;
  text-align: center;
`;

const Carousel: React.FC<CarouselProps> = (props) => {
  const { slides, title } = props;
  const [activeSlide, setActiveSlide] = useState(0);
  const nextIndex = (activeSlide + 1 >= slides.length) ? 0 : activeSlide + 1;
  const prevIndex = (activeSlide - 1 < 0) ? slides.length - 1 : activeSlide - 1;

  const subtitle = <span>
    <IndicatorWrapper>
      {`${activeSlide + 1} of ${slides.length}`}

      {slides.map((slide, index) => (
        <Indicator active={activeSlide === index} />
      ))}
    </IndicatorWrapper>
    
  </span>

  return (
    <div>
      <ProjectCover 
        {...slides[activeSlide]} 
        subtitle={subtitle}
      />      
      
      {title && <CarouselTitle> {title} </CarouselTitle>}

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