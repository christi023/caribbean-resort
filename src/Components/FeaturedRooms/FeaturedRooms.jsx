import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { getRooms } from '../../actions/roomActions';
// Components
import Title from '../Title/Title';
import Loading from '../Loading/Loading';

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
      <section className="featured-rooms container" style={{ padding: '5rem 0' }}>
        <Title title="Featured Rooms" />
        <div className="row">
          {state.rooms.map((room, i) => (
            <Loading />
          ))}
        </div>
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
