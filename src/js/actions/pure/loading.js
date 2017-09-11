import {SET_LOADING} from 'constants/action-types';

export function setLoading(scope, loading=true) {
  return {
    type: SET_LOADING,
    payload: {
      scope,
      loading,
    },
  };
}
