import React from 'react';
import { Carousel } from './components';
import { Slide } from './components/Carousel/types';
import './styles/fonts.css';
import './styles/reset.css';
import './styles/base.css';

import data from './data.json';

// TODO REPLACE WITH WEBPACK LOADER CONFIG
const mapImagesSource = (data: Slide[]) => data.map((slide) => ({
  ...slide,
  image: {
    ...slide.image,
    src: `${process.env.PUBLIC_URL}${slide.image.src}`,
  }
}));


const App = () => (
  <Carousel 
    title="XYZ Photography"
    slides={mapImagesSource(data.sliderData) } 
  />
);

export default App;
