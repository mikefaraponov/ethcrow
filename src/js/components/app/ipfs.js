
@observer(['ipfs'])
export default class Ipfs extends React.Component {
  componentWillMount() {
    this.props.ipfs.initialize();
  }
  render() {
    return React.Children.only(this.props.children);
  }
}
