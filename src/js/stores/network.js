import {observable, computed, action} from 'mobx';

export default class Network {
  @observable online = true;
  @computed get isOnline() {
    return online;
  }
  @computed get isOffline() {
    return !online;
  }
  @action
  onOnline = () => {
    this.online = true;
  }
  @action
  onOffline = () => {
    this.online = false;
  }
  @action
  initialize = () => {
    window.addEventListener('online', this.onOnline, false);
    window.addEventListener('offline', this.onOffline, false);
  }
  @action
  deinitialize = () => {
    window.removeEventListener('online', this.onOnline);
    window.removeEventListener('offline', this.onOffline);
  }
}
