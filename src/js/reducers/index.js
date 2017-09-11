import {combineReducers} from 'redux';
import loading from 'reducers/loading';
import storage from 'reducers/storage';
import profile from 'reducers/profile';

export default combineReducers({
	loading,
  storage,
  profile,
});
