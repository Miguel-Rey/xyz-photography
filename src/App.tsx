import React from 'react';
import { Carousel } from './components';
import { Slide } from './components/Carousel/types';
import './styles/fonts.css';
import './styles/reset.css';

// TODO REPLACE WITH WEBPACK LOADER CONFIG
const mapImagesSource = (data: Slide[]) => data.map((slide) => ({
  ...slide,
  image: {
    ...slide.image,
    src: `${process.env.PUBLIC_URL}${slide.image.src}`,
  }
}));

const sliderData: Slide[] = [
  {
    image: {
      src: 'assets/images/image01.jpg',
      alt: 'alt-01',
    },
    title: 'Everyday Flowers',
    author: 'Johanna Hobel for Vouge',
    date: 'Jun 2019',
    href: '/everyday-flowers',
    anchor: 'Have a look',
  },
  {
    image: {
      src: 'assets/images/image02.jpg',
      alt: 'alt',
    },
    title: 'The wilder night',
    author: 'Johanna Hobel for Wild',
    date: 'Dec 2019',
    href: '/the-wilder-night',
    anchor: 'Have a look',
  },
  {
    image: {
      src: 'assets/images/image03.jpg',
      alt: 'alt',
    },
    title: 'Smooth Memories',
    author: 'Johanna Hobel for Chanel',
    date: 'Feb 2020',
    href: '/smooth-memories',
    anchor: 'Have a look',
  },
  {
    image: {
      src: 'assets/images/image04.jpg',
      alt: 'alt',
    },
    title: 'The Future Universe',
    author: 'Johanna Hobel for On',
    date: 'Apr 2020',
    href: '/the-future-universe',
    anchor: 'Have a look',
  },
  {
    image: {
      src: 'assets/images/image05.jpg',
      alt: 'alt',
    },
    title: 'She was born Urban',
    author: 'Johanna Hobel for Si',
    date: 'Dec 2021',
    href: '/she-was-born-urban',
    anchor: 'Have a look',
  }
];

function App() {
  return (
    <Carousel 
      title="XYZ Photography"
      slides={mapImagesSource(sliderData) } 
    />
  );
}

export default App;
