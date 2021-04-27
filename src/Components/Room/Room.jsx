import React from 'react';
import { Link } from 'react-router-dom';
import defaultImg from '../../images/room-1.jpeg';
// styles
import './Room.css';

export default function Room({ room }) {
  return (
    <>
      <article className="room">
        <div className="img-container">
          <img
            src={(room.images && room.images[0]) || defaultImg}
            alt="single room"
            className="img-fluid"
          />
          <div className="price-top">
            <h6>${room.price}</h6>
            <p>per night</p>
          </div>
          <Link
            to={`/rooms/${room.slug}`}
            className="btn-warning room-link text-center"
            style={{ marginRight: '-2rem' }}
          >
            Features
          </Link>
          <p className="room-info">{room.name}</p>
        </div>
      </article>
    </>
  );
}
