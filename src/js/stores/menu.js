import {observable, action, computed} from 'mobx';

export default class Menu {
  @observable isOpened = false;
  @computed get isClosed() {
    return !this.isOpened;
  }
  @action
  toggleMenu = () => this.isOpened = !this.isOpened;
}
