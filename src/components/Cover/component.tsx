import React from 'react';
import { CoverProps } from './types';
import { LinkBox } from '../index';
import { motion } from 'framer-motion';
import { Movingbox } from '../index';
import {
  CoverBox,
  BackgroundImage,
  HighlightedImage,
  LinkBoxWrapper,
  TextBox,
  Title,
  TitleWhite,
  Subtitle,
} from './styles';

import {
  BackgroundAnimation,
  TitleAnimation,
  ImageAnimation,
  LinkBoxAnimation,
  SubtitleAnimation,
} from './animations';

const Cover: React.FC<CoverProps> = (props) => {
  const { image, title, author, date, anchor, href, subtitle } = props;

  const shouldRenderLinkBox = author || date || (anchor && href);
  
  return (
    <CoverBox>
      <BackgroundImage 
        as={motion.img}
        variants={BackgroundAnimation}
        src={image.src} 
        alt={image.alt} 
      />

      <TextBox
        as={motion.div}
        whileHover={{ scale: 1.05 }}
      >
        <Title
          as={motion.h2}
          variants={TitleAnimation}
        > 
          { title }
        </Title>

        <TitleWhite
          as={motion.h2}
          variants={TitleAnimation}
        > 
          { title }
        </TitleWhite>

        <Subtitle
          as={motion.h2}
          variants={SubtitleAnimation}
        >
          {subtitle}
        </Subtitle>

        <HighlightedImage
          as={motion.img}
          variants={ImageAnimation}
          src={image.src} 
          alt={image.alt}
        />
      </TextBox>

      {shouldRenderLinkBox && (
        <LinkBoxWrapper
          as={motion.div}
          variants={LinkBoxAnimation}
        >
          <LinkBox 
            author={author}
            date={date}
            anchor={anchor}
            href={href}
          />
        </LinkBoxWrapper>
      )}

    </CoverBox>
  );
}

export default Cover;