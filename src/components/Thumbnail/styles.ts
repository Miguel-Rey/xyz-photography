import styled from 'styled-components';

export const ThumbnailWrapper = styled.div`
  width: 22vw;
  width: clamp(120px, 22vw, 215px);
  border: 1px solid #000000;
  border-radius: 0.625rem;
  overflow: hidden;
  aspect-ratio: 64/85
`;

export const ThumbnailImage = styled.img`
  width: 100%;
`
