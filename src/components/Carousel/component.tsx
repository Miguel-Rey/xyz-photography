import React, { 
  useCallback, 
  useState, 
  WheelEvent,
  useEffect,
} from 'react';
import { CarouselProps } from './types';
import debounce from 'lodash.debounce';

import { Thumbnail, Cover, Indicator, Cursor, RotativeElement } from '../index';
import {
  CarouselWrapper,
  IndicatorWrapper,
  CarouselTitle,
  PrevButton,
  NextButton,
  Subtitle,
} from './styles';

import { motion, AnimatePresence } from "framer-motion";

const Carousel: React.FC<CarouselProps> = (props) => {
  const { slides, title } = props;

  const [[activeSlide, direction], setActiveSlide] = useState([0, 0]);
  const [changingSlide, setChangingSlide] = useState(false);

  const [useBigCursor, setUseBigCursor] = useState(false);

  const nextIndex = (activeSlide + 1 >= slides.length) ? 0 : activeSlide + 1;
  const prevIndex = (activeSlide - 1 < 0) ? slides.length - 1 : activeSlide - 1;

  const changeSlideOnWheel = useCallback((e: WheelEvent<HTMLDivElement>) => {
    if (!changingSlide) {
      setActiveSlide(e.deltaY > 0 ? [nextIndex, 1] : [prevIndex, -1]);
    }
  }, [nextIndex, prevIndex, changingSlide]);

  const debounced = debounce(changeSlideOnWheel);

  useEffect(() => {
    setChangingSlide(true);
    setTimeout(() => setChangingSlide(false), 1000);
  }, [activeSlide]);

  return (
    <CarouselWrapper onWheel={debounced}>

      <AnimatePresence 
        initial={false}
        custom={direction}
      >
        <motion.div
          key={slides[activeSlide].image.src}
          custom={direction}
          initial="enter"
          animate="center"
          exit="exit"
        >
          <Cover
            {...slides[activeSlide]}
          />
        </motion.div>
      </AnimatePresence>

      <Subtitle>
        <RotativeElement constrain={80}>
          <IndicatorWrapper>
            {`${activeSlide + 1} of ${slides.length}`}

            {slides.map((_slide, index) => (
              <Indicator 
                key={index}
                active={activeSlide === index}
              />
            ))}
          </IndicatorWrapper>
        </RotativeElement>
      </Subtitle>

      {title && <CarouselTitle> {title} </CarouselTitle>}

      <AnimatePresence 
        initial={false}
        custom={direction}
      >
        <PrevButton
          as={motion.button}
          key={`prev-button${slides[activeSlide].image.src}`}
          initial={{ opacity: 0.5 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0.5 }}
          onClick={() => setActiveSlide([prevIndex, -1])}
          onMouseEnter={() => setUseBigCursor(true)}
          onMouseLeave={() => setUseBigCursor(false)}
        >
          <RotativeElement constrain={120}>
            <Thumbnail src={slides[prevIndex]?.image?.src} />
          </RotativeElement>
        </PrevButton>

        <NextButton 
          as={motion.button}
          key={`next-button${slides[activeSlide].image.src}`}
          initial={{ opacity: 0.5 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0.5 }}
          onClick={() => setActiveSlide([nextIndex, 1])}
          onMouseEnter={() => setUseBigCursor(true)}
          onMouseLeave={() => setUseBigCursor(false)}
        >
          
          <RotativeElement constrain={120}>
              <Thumbnail src={slides[nextIndex]?.image?.src} />
          </RotativeElement>
        </NextButton>
      </AnimatePresence>


      <Cursor 
        total={slides.length}
        active={activeSlide}
        size={useBigCursor ? 63 : 42}
      />
    </CarouselWrapper>
  );
};

export default Carousel;