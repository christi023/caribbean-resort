import React from 'react';
// Component
import Room from '../../Room/Room';
import { Card, Col, Row } from 'react-bootstrap';
import NotFound from '../../../images/notfound.svg';
// style
import './RoomsList.css';

export default function RoomsList({ rooms }) {
  if (rooms.length === 0) {
    return (
      <>
        <div className="container my-5">
          <Card className="shadow-lg border-0 p-4">
            <Row>
              <Col md={6} col={12} className="my-auto">
                <img src={NotFound} alt="not found" className="img-fluid" />
              </Col>
              <Col md={6} col={12} className="mx-auto">
                <div className="empty-search">
                  <h3 className="display-4">
                    unfortunately no rooms matched to your search parameter
                  </h3>
                </div>
              </Col>
            </Row>
          </Card>
        </div>
      </>
    );
  }

  return (
    <>
      <section className="container">
        <Row className="my-5">
          {rooms.map((item, i) => {
            return <Room key={i} room={item} />;
          })}
        </Row>
      </section>
    </>
  );
}
