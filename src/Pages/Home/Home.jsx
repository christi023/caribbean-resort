import React from 'react';
import { Link } from 'react-router-dom';
import Hero from '../../Components/Hero/Hero';
import Banner from '../../Components/Banner/Banner';

export default function Home() {
  return (
    <>
      <Hero>
        <Banner title="Exotic Rooms" subtitle="Deluxe rooms starting at $275">
          <Link to="/rooms" className="btn btn-primary">
            Our Rooms
          </Link>
        </Banner>
      </Hero>
    </>
  );
}
