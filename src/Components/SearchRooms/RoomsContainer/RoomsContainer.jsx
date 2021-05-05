import React, { useState, useEffect } from 'react';
// redux
import { connect } from 'react-redux';
import { getRooms } from '../../../actions/roomActions';
// Components
import RoomsFilter from '../RoomsFilter/RoomsFilter';
import RoomsList from '../RoomsList/RoomsList';
// style
import './RoomsContainer.css';

function RoomsContainer(props) {
  const [state, setState] = useState({
    rooms: [],
    sortedRooms: [],
    loading: true,
  });

  useEffect(() => {
    props.getRooms();

    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    setState({
      ...state,
      rooms: props.rooms,
      sortedRooms: props.rooms,
      loading: false,
    });
    // eslint-disable-next-line
  }, []);

  // method
  const handleChange = () => ({ type, price, capacity, breakfast, pets, minSize, maxSize }) => {
    // for all rooms
    let sortedRooms = props.rooms;
    // transform value
    capacity = parseInt(capacity);
    price = parseInt(price);

    // filter by type
    if (type) {
      if (type === 'all') {
        sortedRooms = props.rooms;
      } else {
        sortedRooms = sortedRooms.filter((room) => room.type === type);
      }
    }
    // filter by capacity
    if (capacity !== 1) {
      sortedRooms = sortedRooms.filter((room) => room.capacity >= capacity);
    }
    // filter by price
    if (price) {
      sortedRooms = sortedRooms.filter((room) => room.price <= price);
    }
    // filter by size
    if (minSize && maxSize) {
      sortedRooms = sortedRooms.filter((room) => room.size >= minSize && room.size <= maxSize);
    }
    // filter by pets
    if (pets) {
      sortedRooms = sortedRooms.filter((room) => room.pets === true);
    }
    // filter by breakfast
    if (breakfast) {
      sortedRooms = sortedRooms.filter((room) => room.breakfast === true);
    }
    setState({ ...state, sortedRooms: sortedRooms });
  };

  return (
    <>
      <div style={{ marginBottom: '2rem' }}>
        <RoomsFilter rooms={state.rooms} onChange={handleChange} />
        <RoomsList rooms={state.sortedRooms} />
      </div>
    </>
  );
}

const mapStateToProps = (state) => {
  return {
    rooms: state.rooms,
  };
};

export default connect(mapStateToProps, { getRooms })(RoomsContainer);
