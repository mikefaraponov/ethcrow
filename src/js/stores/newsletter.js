import ifElse from 'ramda/src/ifElse';
import is from 'ramda/src/is';
import prop from 'ramda/src/prop';
import {observable, computed, action} from 'mobx';

export default class Newsletter {
  @observable pending = false;
  @observable result = null;
  @observable error = null;
  @observable email = null;
  @observable isInvalid = false;
  /**
   * Newsletter constructor
   * @param  {Object} axios http(s) client
   */
  constructor(axios) {
    this.axios = axios;
  }
  @action.bound
  onChange(e) {
    this.email = e.target.value;
    this.isInvalid = !this.validateEmail(e.target.value);
  }
  @action.bound
  subscribe() {
    this.pending = true;
    return this.axios.post(process.env.RPC_URL, {email: this.email})
      .then(this.getData)
      .then(this.setResult)
      .catch(this.setError)
      .tap(this.unsetPending);
  }
  @action.bound
  unsetPending() {
    this.pending = false;
  }
  @action.bound
  setError(error) {
    this.error = error;
  }
  @action.bound
  setResult(result) {
    this.result = result;
  }
  getData(response) {
    return response.data;
  }
  @computed get isLocked() {
    return result;
  }
}

