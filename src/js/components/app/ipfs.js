import {inject} from 'mobx-react';

@inject('ipfs')
export default class Ipfs extends React.Component {
  componentWillMount() {
    return this.props.ipfs.initialize();
  }
  render() {
    return React.Children.only(this.props.children);
  }
}
