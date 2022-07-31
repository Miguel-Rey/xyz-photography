import React from 'react';
import { Carousel } from './components';

import './styles/fonts.css';
import './styles/reset.css';
import './styles/base.css';

import data from './data.js';

const App = () => (
  <Carousel 
    title={data.title}
    slides={data.slides} 
  />
);

export default App;
