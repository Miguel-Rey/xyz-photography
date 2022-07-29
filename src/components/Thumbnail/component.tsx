import React from 'react';
import { ThumbnailProps } from './types';
import { ThumbnailImage } from './styles';

const Thumbnail: React.FC<ThumbnailProps> = (props) => {
  const { src, alt } = props;

  return <ThumbnailImage src={src} alt={alt} />
};

export default Thumbnail;