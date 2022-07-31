import React from 'react';
import { motion } from "framer-motion"
import { ThumbnailProps } from './types';
import { ThumbnailWrapper, ThumbnailImage } from './styles';
import { ThumbnailImageAnimation } from './animations';

const Thumbnail: React.FC<ThumbnailProps> = (props) => {
  const { src, alt } = props;

  return (
    <ThumbnailWrapper>
      <ThumbnailImage
        as={motion.img}
        variants={ThumbnailImageAnimation}
        whileHover={{ scale: 1.1 }}
        src={src} 
        alt={alt} 
      />
    </ThumbnailWrapper>
  );
};

export default Thumbnail;