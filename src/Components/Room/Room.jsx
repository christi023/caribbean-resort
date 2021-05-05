import React from 'react';
import { Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import defaultImg from '../../images/room-1.jpeg';
// styles
import './Room.css';

export default function Room({ room }) {
  return (
    <>
      <Col md={4} col={12} className=" mx-auto p-2">
        <Card className=" shadow-lg border-0 room">
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
        </Card>
      </Col>
    </>
  );
}
