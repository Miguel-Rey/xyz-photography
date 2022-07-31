import styled from 'styled-components';

export const ThumbnailWrapper = styled.div`
  width: clamp(120px, 22vw, 245px);
  aspect-ratio: 64/85;
  
  overflow: hidden;

  border: 1px solid #000000;
  border-radius: 0.625rem;
`;

export const ThumbnailImage = styled.img`
  width: 100%;
`
