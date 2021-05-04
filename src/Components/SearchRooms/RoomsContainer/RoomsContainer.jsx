import React from 'react';
// redux
// import { connect } from 'react-redux';
// import { getRooms } from '../../../actions/roomActions';
// Components
import RoomsFilter from '../RoomsFilter/RoomsFilter';
import RoomsList from '../RoomsList/RoomsList';

// style
import './RoomsContainer.css';

export default function RoomsContainer() {
  return (
    <>
      <div>
        <h1>Rooms Container</h1>
        <RoomsFilter />
        <RoomsList />
      </div>
    </>
  );
}
