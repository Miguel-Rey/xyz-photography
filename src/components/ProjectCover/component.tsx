import React from 'react';
import { ProjectCoverProps } from './types';
import styled from 'styled-components';

const CoverBox = styled.div`
  height: 100vh;
  width: 100vw;
  position: relative;
`;

const BackgroundImage = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  filter: blur(200px);
`;

const HighlightedImage = styled.img`
  position: absolute;
  top: 50%;
  left: 50%;

  transform: translate(-50%, -50%);

  width: 512px;
  height: 680px;

  border: 1px solid #000000;
  border-radius: 10px;
`;

const TextBox = styled.div`
  width: 844px;

  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`

const Title = styled.h2`
  font-family: Tungsten;
  font-size: 220px;
  font-weight: 600;
  line-height: 80%;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  text-align: center;

  color: transparent;
  -webkit-text-stroke: 1px white;
  background: linear-gradient(to right, transparent 19.5%, white 19.5%, white 80.5%, transparent 80.5%);
  -webkit-background-clip: text;
  background-clip: text;
`;

const Subtitle = styled.p`
  font-family: 'Helvetica';
  font-style: normal;
  font-weight: 400;
  font-size: 10px;
  line-height: 11px;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  text-align: center;

  color: #FFFFFF;
`


const ProjectCover: React.FC<ProjectCoverProps> = (props) => {
  const { image, title, subtitle } = props;
  
  return (
    <CoverBox>
      <BackgroundImage src={image.src} alt={image.alt} />

      <HighlightedImage src={image.src} alt={image.alt} />

      <TextBox>
        <Title> { title }</Title>

        {subtitle && <Subtitle> {subtitle} </Subtitle>}
      </TextBox>

    </CoverBox>
  );
}

export default ProjectCover;