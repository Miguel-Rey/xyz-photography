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
  width: 120vw;
  height: 120vh;

  position: fixed;
  top: -10vw;
  left: -10vh;
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

  position: relative;
`

export const HighlightedImage = styled.img`
  width: 100%;

  border: 1px solid #000000;
  border-radius: 10px;

  will-change: transform;
`;

export const TextMask = styled.div`
  height: 200px;
  width: 100%;
  
  position: absolute;
  top: 50%;

  background: white;

  will-change: transform;
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


  will-change: transform;
`;

export const TitleWhite = styled(Title)`
  color: white;
  z-index: 9;
  clip-path: polygon(20.9% 0%, 79.1% 0%, 79.1% 100%, 20.9% 100%);

  will-change: transform;
`;

export const Subtitle = styled.div`
  width: 100%;
  
  position: absolute;
  bottom: 24%;
  left: 50%;

  transform: translateX(-50%);
  z-index: 10;

  white-space: nowrap;

  will-change: transform;
`

export const LinkBoxWrapper = styled.div`
  position: absolute;
  right: 11vw;
  bottom: 100px;
`