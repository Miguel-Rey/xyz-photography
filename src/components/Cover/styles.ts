import styled from 'styled-components';

export const CoverBox = styled.div`
  height: 100vh;
  width: 100vw;
  position: relative;
`;

export const BackgroundImage = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  filter: blur(200px);
`;

export const HighlightedImage = styled.img`
  position: absolute;
  top: 50%;
  left: 50%;

  transform: translate(-50%, -50%);

  width: 35vw;
  min-width: 200px;
  
  border: 1px solid #000000;
  border-radius: 10px;
`;

export const TextBox = styled.div`
  width: 60vw;
  min-width: 250px;

  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  display: flex;
  flex-direction: column;
  align-items: center;
`

export const Title = styled.h2`
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

export const Subtitle = styled.span`
  font-family: 'Helvetica';
  font-style: normal;
  font-weight: 400;
  font-size: 10px;
  line-height: 11px;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  text-align: center;

  display: flex;
  align-items: baseline;

  color: #FFFFFF;
  margin-top: 0.5vw;
`

export const LinkBoxWrapper = styled.div`
  position: absolute;
  right: 100px;
  bottom: 100px;
`