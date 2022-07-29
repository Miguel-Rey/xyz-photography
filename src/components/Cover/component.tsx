import React from 'react';
import { CoverProps } from './types';
import { LinkBox } from '../index';
import {
  CoverBox,
  BackgroundImage,
  HighlightedImage,
  LinkBoxWrapper,
  TextBox,
  Title,
  Subtitle
} from './styles';


const Cover: React.FC<CoverProps> = (props) => {
  const { image, title, subtitle, author, date, anchor, href } = props;

  const shouldRenderLinkBox = author || date || (anchor && href);
  
  return (
    <CoverBox>
      <BackgroundImage src={image.src} alt={image.alt} />

      <HighlightedImage src={image.src} alt={image.alt} />

      <TextBox>
        <Title> { title }</Title>

        {subtitle && <Subtitle> {subtitle} </Subtitle>}
      </TextBox>

      {shouldRenderLinkBox && (
        <LinkBoxWrapper>
          <LinkBox 
            author={author}
            date={date}
            anchor={anchor}
            href={href}
          />
        </LinkBoxWrapper>
      )}

    </CoverBox>
  );
}

export default Cover;