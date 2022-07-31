import React, { useState, WheelEvent } from 'react';
import { CarouselProps, CarouselButtonProps, CarouselIndicatorProps } from './types';
import debounce from 'lodash.debounce';

import { Thumbnail, Cover, Indicator, Cursor, Movingbox } from '../index';
import {
  CarouselWrapper,
  CarouselTitle,
  PrevButton,
  NextButton,
  IndicatorWrapper,
  IndicatorInner,
  IndicatorText,
} from './styles';

import { motion, AnimatePresence, MotionConfig } from "framer-motion";

const CarouselButton: React.FC<CarouselButtonProps> = ({
  image,
  onMouseEnter,
  onMouseLeave,
  onClick,
  isNextButton,
}) => {
  const ButtonComponent = isNextButton ? NextButton : PrevButton;
  const key = isNextButton ? `next-${image}` : `prev-${image}`;
  return (
    <motion.div
      key={key}
      initial="enter"
      animate="center"
      exit="exit"
    >   
      <ButtonComponent
        onClick={onClick}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
      >
        <Movingbox constrain={120}>
          <Thumbnail src={image} />
        </Movingbox>
      </ButtonComponent>
    </motion.div>
  );
};

const CarouselIndicator: React.FC<CarouselIndicatorProps> = ({
  total,
  active,
  connector,
}) => (
  <IndicatorWrapper>
    <Movingbox constrain={80}>
      <IndicatorInner>
        <IndicatorText>
          {`${active + 1} ${connector} ${total}`}
        </IndicatorText>

        {Array.from(Array(total)).map((_item, i) => (
          <Indicator 
            key={i}
            active={active === i}
          />
        ))}
      </IndicatorInner>
    </Movingbox>
  </IndicatorWrapper>
);


const Carousel: React.FC<CarouselProps> = (props) => {
  const { slides, title } = props;
  const [activeSlide, setActiveSlide] = useState(0);

  const [useBigCursor, setUseBigCursor] = useState(false);

  const nextIndex = (activeSlide + 1 >= slides.length) ? 0 : activeSlide + 1;
  const prevIndex = (activeSlide - 1 < 0) ? slides.length - 1 : activeSlide - 1;

  const changeSlide = (direction: number) => {
    document.body.style.setProperty('--direction', `${direction}`);
    setActiveSlide(direction > 0 ? nextIndex : prevIndex);
  }

  const changeSlideOnWheel = (e: WheelEvent) => changeSlide(e.deltaY > 0 ? 1 : -1);
  const debouncedChangeSlideOnWheel = debounce(changeSlideOnWheel, 200);

  return (
    <CarouselWrapper 
      onWheel={debouncedChangeSlideOnWheel}
    >
      <MotionConfig transition={{ type: 'tween' }}>
        <AnimatePresence>
          <motion.div
            key={slides[activeSlide].image.src}
            initial="enter"
            animate="center"
            exit="exit"
          >
            <Cover 
              {...slides[activeSlide]}
              subtitle={(
                <CarouselIndicator
                  total={slides.length}
                  active={activeSlide}
                  connector="of"
                />
              )}
            />
          </motion.div>
        </AnimatePresence>

        <CarouselTitle> {title} </CarouselTitle>

        <AnimatePresence>
          <CarouselButton
            image={slides[prevIndex].image.src}
            onClick={() => changeSlide(-1)}
            onMouseEnter={() => setUseBigCursor(true)}
            onMouseLeave={() => setUseBigCursor(false)}
          />

          <CarouselButton
            key={`next-${slides[prevIndex].image.src}`}
            image={slides[nextIndex].image.src}
            onClick={() => changeSlide(+1)}
            onMouseEnter={() => setUseBigCursor(true)}
            onMouseLeave={() => setUseBigCursor(false)}
            isNextButton
          />
        </AnimatePresence>


        <Cursor 
          total={slides.length}
          active={activeSlide}
          size={useBigCursor ? 63 : 42}
        />
      </MotionConfig>
    </CarouselWrapper>
  );
};

export default Carousel;