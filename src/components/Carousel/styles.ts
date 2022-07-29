import styled from 'styled-components';

export const CarouselButton = styled.button`
  position: absolute;
  padding: 0;
  background: none;
  border: none;
  cursor: pointer;
`

export const NextButton = styled(CarouselButton)`
  top: 16px;
  right: 16px;
`

export const PrevButton = styled(CarouselButton)`
  bottom: 16px;
  left: 16px;
`

export const CarouselTitle = styled.h1`
  position: absolute;
  left: 16px;
  top: 16px;

  font-family: 'Tungsten';
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
  letter-spacing: 0.08em;
  text-transform: uppercase;

  color: #FFFFFF;
`

export const IndicatorWrapper = styled.span`
  display: flex;
  gap: 8px;
  text-align: center;
`;