import React from 'react';
import './Hero2.css';

function Hero({ children, hero2 }) {
  return <header className={hero2}>{children}</header>;
}
Hero.defaultProps = {
  hero2: 'defaultHero',
};
export default Hero;
