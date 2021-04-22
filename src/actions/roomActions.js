// constants
import { GET_ROOMS } from '../constants/roomConstants';

export const getRooms = () => (dispatch) => {
  dispatch({
    type: GET_ROOMS,
    // payload: response
  });
};
