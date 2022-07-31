import React from 'react';
import { CoverProps } from './types';
import { LinkBox } from '../index';
import { motion } from 'framer-motion';
import { RotativeElement } from '../index';
import {
  CoverBox,
  BackgroundImage,
  HighlightedImage,
  LinkBoxWrapper,
  TextBox,
  Title,
} from './styles';

import {
  BackgroundAnimation,
  TitleAnimation,
  ImageAnimation,
  LinkBoxAnimation
} from './animations';

const Cover: React.FC<CoverProps> = (props) => {
  const { image, title, author, date, anchor, href, onAnimationComplete } = props;

  const shouldRenderLinkBox = author || date || (anchor && href);
  
  return (
    <CoverBox>
      <BackgroundImage 
        as={motion.img}
        variants={BackgroundAnimation}
        transition={{ type: 'tween' }}
        src={image.src} 
        alt={image.alt} 
      />

      <TextBox
        as={motion.div}
        whileHover={{ scale: 1.05 }}
        transition={{ type: 'tween' }}
      >
        <RotativeElement constrain={40}>
          <Title
            as={motion.h2}
            variants={TitleAnimation}
            transition={{ type: 'tween' }}
            onAnimationComplete={onAnimationComplete}
          > 
            { title }
          </Title>

          <HighlightedImage
            as={motion.img}
            variants={ImageAnimation}
            transition={{ type: 'tween' }}
            src={image.src} 
            alt={image.alt}
          />
        </RotativeElement>
      </TextBox>

      {shouldRenderLinkBox && (
        <LinkBoxWrapper
          as={motion.div}
          variants={LinkBoxAnimation}
          transition={{ type: 'tween' }}
        >
          <RotativeElement constrain={40}>
            <LinkBox 
              author={author}
              date={date}
              anchor={anchor}
              href={href}
            />
          </RotativeElement>
        </LinkBoxWrapper>
      )}

    </CoverBox>
  );
}

export default Cover;