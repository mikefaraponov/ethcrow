import {combineReducers} from 'redux';
import session from 'reducers/session';
import network from 'reducers/network';

export default combineReducers({
	network,
  session,
});
