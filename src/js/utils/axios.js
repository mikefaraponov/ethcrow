import axios from 'axios';
import Bluebird from 'bluebird';

axios.defaults.Promise = Bluebird;

export default axios;
