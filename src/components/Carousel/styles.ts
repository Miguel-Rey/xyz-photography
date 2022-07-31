import styled from 'styled-components';

export const CarouselWrapper = styled.div`
  cursor: none;
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

// Indicator related

export const IndicatorWrapper = styled.span`
  position: absolute;
  top: 70%;
  left: 50%;
  transform: translate(-50%, -50%);

  display: flex;
  align-items: baseline;

  color: #FFFFFF;
  margin-top: 0.5vw;
`

export const IndicatorInner = styled.span`
  display: flex;
  gap: 8px;
  text-align: center;
  align-items: center;
`;

export const IndicatorText = styled.span`
  font-family: 'Helvetica';
  font-style: normal;
  font-weight: 400;
  font-size: 10px;
  line-height: 11px;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  text-align: center;

  margin-right: 16px;
`

// Button related

export const CarouselButton = styled.button`
  position: absolute;
  padding: 0;
  background: none;
  border: none;
  z-index: 1;
  cursor: none;
`

export const NextButton = styled(CarouselButton)`
  top: 16px;
  right: 16px;
`

export const PrevButton = styled(CarouselButton)`
  bottom: 16px;
  left: 16px;
`