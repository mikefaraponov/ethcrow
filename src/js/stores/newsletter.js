import ifElse from 'ramda/src/ifElse';
import is from 'ramda/src/is';
import prop from 'ramda/src/prop';
import {observable, computed, action} from 'mobx';
import {validate} from 'email-validator';

export default class Newsletter {
  @observable pending = false;
  @observable result = false;
  @observable error = false;
  email = '';
  constructor(axios) {
    this.axios = axios;
  }
  @action
  onEmailInput = (e) => {
    this.email = e.target.value;
  }
  @action
  subscribe = () => {
    if (validate(this.email)) {
      this.error = false;
      this.pending = true;
      return this.axios.post(process.env.RPC_URL, {email: this.email})
        .then((response) => response.data)
        .then((result) => this.result = true)
        .catch((error) => {
          if (error.response) {
            this.error = error.response.data;
          } else {
            this.error = error;
          }
        })
        .tap(() => this.pending = false);
    }
  }
}

