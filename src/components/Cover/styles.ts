import styled from 'styled-components';

export const CoverBox = styled.div`
  width: 100%;
  height: 100%;
  
  position: absolute;
  
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const BackgroundImage = styled.img`
  width: 100vw;
  height: 100vh;

  position: fixed;
  top: 0;
  left: 0;
  z-index: -1;

  filter: blur(150px);
`;

export const TextBox = styled.div`
  width: 36vw;
  min-width: 200px;
  max-width: 516px;


  display: flex;
  flex-direction: column;
  align-items: center;
  
`

export const HighlightedImage = styled.img`
  width: 100%;

  border: 1px solid #000000;
  border-radius: 10px;
`;

export const TextMask = styled.div`
  height: 200px;
  width: 100%;
  
  position: absolute;
  top: 50%;

  background: white;
`

export const Title = styled.h2`
  width: 12ch;
  max-width: 888px;

  position: absolute;
  top: 25%;
  left: 50%;
  z-index: 10;
  
  transform: translateX(-50%);

  font-family: Tungsten;
  font-weight: 600;
  font-size: clamp(80px, 14vw, 220px);
  line-height: 80%;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  text-align: center;

  color: transparent;
  -webkit-text-stroke: 1px white;
`;

export const TitleWhite = styled(Title)`
  color: white;
  z-index: 9;
  clip-path: polygon(21% 0%, 79% 0%, 79% 100%, 21% 100%);
`;

export const Subtitle = styled.div`
  width: 100%;
  
  position: absolute;
  bottom: 27%;
  left: 50%;

  transform: translateX(-50%);
  z-index: 10;

  white-space: nowrap;
`

export const LinkBoxWrapper = styled.div`
  position: absolute;
  right: 11vw;
  bottom: 100px;
`