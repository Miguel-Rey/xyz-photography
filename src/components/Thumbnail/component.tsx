import React from 'react';
import { ThumbnailProps } from './types';
import styled from 'styled-components';

const ThumbnailImage = styled.img`
  width: 248px;
  height: 330px;

  border: 1px solid #000000;
  border-radius: 10px;
`

const Thumbnail: React.FC<ThumbnailProps> = (props) => {
  const { src, alt } = props;

  return (
    <ThumbnailImage src={src} alt={alt} />
  );
};

export default Thumbnail;