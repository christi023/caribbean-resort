import { GET_ROOMS } from '../constants/roomConstants';
import items from '../data';

const roomReducer = (state = [], action) => {
  switch (action.type) {
    case GET_ROOMS:
      const rooms = getFormatted(action.payload);
      return rooms;
    default:
      return state;
  }
};

const getFormatted = () => {
  let tempItems = items.map((item) => {
    let id = item.sys.id;
    let images = item.fields.images.map((image) => image.fields.file.url);
    let room = { ...item.fields, images, id };
    return room;
  });
  return tempItems;
};

export default roomReducer;
