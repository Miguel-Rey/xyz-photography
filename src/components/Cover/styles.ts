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
  width: 35vw;
  min-width: 200px;

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
  background: linear-gradient(to right, transparent 18.8%, white 18.8%, white 81.2%, transparent 81.2%);
  -webkit-text-stroke: 1px white;
  -webkit-background-clip: text;
  backgroud-clip: text;
`;

export const LinkBoxWrapper = styled.div`
  position: absolute;
  right: 11vw;
  bottom: 100px;
`