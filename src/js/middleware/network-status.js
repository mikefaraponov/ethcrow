import {online, offline} from 'actions/network';

export default function NetworkStatus({dispatch}) {
  window.ononline = () => dispatch(online());
  window.onoffline = () => dispatch(offline());
  return (next) => (action) => next(action);
}
