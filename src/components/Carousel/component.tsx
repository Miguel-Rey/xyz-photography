import React, { useCallback, useState, WheelEvent } from 'react';
import { CarouselProps } from './types';
import { Thumbnail, Cover, Indicator, Cursor } from '../index';
import {
  CarouselWrapper,
  IndicatorWrapper,
  CarouselTitle,
  PrevButton,
  NextButton,
} from './styles';

const Carousel: React.FC<CarouselProps> = (props) => {
  const { slides, title } = props;
  const [activeSlide, setActiveSlide] = useState(0);
  const nextIndex = (activeSlide + 1 >= slides.length) ? 0 : activeSlide + 1;
  const prevIndex = (activeSlide - 1 < 0) ? slides.length - 1 : activeSlide - 1;

  const changeSlideOnWheel = useCallback((e: WheelEvent<HTMLDivElement>) => {
    if (e.deltaY > 0) {
      setActiveSlide(nextIndex);
    } else {
      setActiveSlide(prevIndex);
    }
  }, [nextIndex, prevIndex]);

  const subtitle = <IndicatorWrapper>
    {`${activeSlide + 1} of ${slides.length}`}

    {slides.map((slide, index) => (
      <Indicator active={activeSlide === index} />
    ))}
  </IndicatorWrapper>

  return (
    <CarouselWrapper onWheel={changeSlideOnWheel}>
      <Cover 
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

      <Cursor 
        total={slides.length}
        active={activeSlide}
      />
    </CarouselWrapper>
  );
};

export default Carousel;