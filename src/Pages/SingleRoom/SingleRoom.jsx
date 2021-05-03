import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { Row, Col } from 'react-bootstrap';
import { Card } from 'react-bootstrap';
// Component
import Banner from '../../Components/Banner/Banner';
import Header from '../../Components/Header/Header';
// actions
import { getRooms } from '../../actions/roomActions';
// style
import './SingleRoom.css';

const SingleRoom = (props) => {
  const [state, setState] = useState({ room: {} });
  //console.log(props);

  useEffect(() => {
    document.title = 'Beach Resort || Room Details';
    props.getRooms();
    //eslint-disable-next-line
  }, []);

  useEffect(() => {
    const room = props.rooms.find((item) => item.slug === props.match.params.slug);
    setState({ room: room });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props.rooms]);

  // room is undefined
  if (!state.room) {
    return (
      <div className="container room-error" style={{ background: 'gray' }}>
        <Row my={5}>
          <Col md={6} col={12} className="mx-auto">
            <Card className="shadow-lg border-0 p-4 error">
              <h1 className="text-center display-4">SORRY</h1>
              <h3>No such room could be found...</h3>
              <Link to="/rooms" className="btn btn-warning mt-4">
                Back to Rooms
              </Link>
            </Card>
          </Col>
        </Row>
      </div>
    );
  }

  const { room } = state;
  // console.log(room);
  return (
    <>
      <Header img={room.images ? room.images[0] : null} />
      <Banner title={`${room.name} room`}>
        <Link to="/rooms" className="btn btn-primary">
          Back To Rooms
        </Link>
      </Banner>
      <section className="single-room container ">
        <Row>
          {room.images &&
            room.images.map((img, i) =>
              i === 0 ? null : (
                <Col md={4} col={12} className="mx-auto">
                  <Card className="border-0 shadow-lg">
                    <img key={i} src={img} alt={room.name} className="img-fluid" />
                  </Card>
                </Col>
              ),
            )}
        </Row>
        <div className="single-room-info">
          <article className="desc">
            <h3>Details</h3>
            <p>{room.description ? room.description : null}</p>
          </article>
          <article className="info">
            <h3>Info</h3>
            <h6>price : ${room.price ? room.price : null}</h6>
            <h6>size : {room.size ? room.size : null} SQFT</h6>
            <h6>
              max capacity :{' '}
              {room.capacity
                ? room.capacity > 1
                  ? `${room.capacity} people`
                  : room.capacity
                : null}
            </h6>
            <h6>{room.pets ? 'pets allowed' : 'no pets allowed'}</h6>
            <h6>{room.breakfast ? 'free breakfast included' : null}</h6>
          </article>
        </div>

        <div className="room-extras">
          <h3>Extras</h3>
          <ul className="extras">
            {room.extras && room.extras.map((item, i) => <li key={i}> {item}</li>)}
          </ul>
          <div className="p-4 clearfix">
            <Row>
              <Col md={3} col={12} className="ml-auto">
                <Link
                  to={`/booknow/${room.slug}`}
                  className=" btn btn-outline-primary btn-block btn-lg float-right"
                >
                  Book Now
                </Link>
              </Col>
            </Row>
          </div>
        </div>
      </section>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    rooms: state.rooms,
  };
};
export default connect(mapStateToProps, { getRooms })(SingleRoom);
