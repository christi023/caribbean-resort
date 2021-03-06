import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { getRooms } from '../../actions/roomActions';
import { Row } from 'react-bootstrap';
// Components
import Title from '../Title/Title';
import Loading from '../Loading/Loading';
import Room from '../Room/Room';
// style
import './FeaturedRooms.css';

const FeaturedRooms = (props) => {
  const [state, setState] = useState({ rooms: [], loading: true });

  // getRooms
  useEffect(() => {
    props.getRooms();
    //eslint-disable-next-line
  }, []);

  // featured Rooms
  useEffect(() => {
    let featuredRooms = props.rooms.filter((room) => room.featured === true);
    setState({ rooms: featuredRooms, loading: false });
    //console.log(featuredRooms);
  }, [props.rooms]);

  return (
    <>
      <section className="featured-rooms container ">
        <Title title="Featured Rooms" />
        {<div>loading... </div> ? (
          <Row>
            {state.rooms.map((room, i) => (
              <Room key={i} room={room} />
            ))}
          </Row>
        ) : (
          <Loading />
        )}
      </section>
    </>
  );
};

const mapStateToProps = (state) => {
  return { rooms: state.rooms };
};

export default connect(mapStateToProps, {
  getRooms,
})(FeaturedRooms);
