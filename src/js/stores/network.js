import {observable, computed, action} from 'mobx';

export default class Network {
  @observable online = true;
  @computed get isOnline() {
    return online;
  }
  @computed get isOffline() {
    return !online;
  }
  @action.bound
  onOnline() {
    this.online = true;
  }
  @action.bound
  onOffline() {
    this.online = false;
  }
  init() {
    window.addEventListener('online', this.onOnline);
    window.addEventListener('offline', this.onOffline);
    return this;
  }
}
