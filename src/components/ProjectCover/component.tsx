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
`;

const Title = styled.h2`
  position: absolute;
  top: 50%;
  left: 50%;
  font-family: Tungsten;
`;


const ProjectCover: React.FC<ProjectCoverProps> = (props) => {
  const { image, title } = props;
  
  return (
    <CoverBox>
      <BackgroundImage src={image.src} alt={image.alt} />

      <Title> { title }</Title>

    </CoverBox>
  );
}

export default ProjectCover;