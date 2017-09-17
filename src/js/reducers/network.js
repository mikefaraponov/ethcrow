import {ONLINE, OFFLINE} from 'actions/network';

const initialState = {
  online: true,
  offline: false,
};

export default function network(state=initialState, action) {
  switch (action.type) {
    case ONLINE:
      return {
        online: true,
        offline: false,
      };
    case OFFLINE:
      return {
        online: false,
        offline: true,
      };
    default:
      return state;
  }
}
