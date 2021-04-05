import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
// style
import './Hero.css';

export default function Hero({ hero, hero1, hero2, children }) {
  return (
    <>
      <header>
        <Carousel>
          <Carousel.Item>
            <img className={hero} src={hero} alt="" /> {children}
          </Carousel.Item>
          <Carousel.Item>
            <img className={hero1} src={hero1} alt="" /> {children}
          </Carousel.Item>
          <Carousel.Item>
            <img className={hero2} src={hero2} alt="" /> {children}
          </Carousel.Item>
        </Carousel>
      </header>
    </>
  );
}

Hero.defaultProps = {
  hero: 'defaultHero',
  hero1: 'defaultHero1',
  hero2: 'defaultHero2',
};
