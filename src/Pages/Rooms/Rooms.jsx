import React from 'react';
import { Link } from 'react-router-dom';
// Components
import Hero2 from '../../Components/Hero2/Hero2';
import Banner from '../../Components/Banner/Banner';

export default function Rooms() {
  return (
    <>
      <Hero2 hero2="roomsHero">
        <Banner title="our rooms">
          <Link to="/" className="btn btn-primary">
            return home
          </Link>
        </Banner>
      </Hero2>
    </>
  );
}
