import React from 'react';
import { motion } from "framer-motion"
import { ThumbnailProps } from './types';
import { ThumbnailWrapper, ThumbnailImage } from './styles';

const Thumbnail: React.FC<ThumbnailProps> = (props) => {
  const { src, alt } = props;

  return (
    <ThumbnailWrapper
      as={motion.div}
      whileHover={{ scale: 0.97 }}
    >
      <ThumbnailImage
        as={motion.img}
        whileHover={{ scale: 1.1 }}
        src={src} 
        alt={alt} 
      />
    </ThumbnailWrapper>
  );
};

export default Thumbnail;