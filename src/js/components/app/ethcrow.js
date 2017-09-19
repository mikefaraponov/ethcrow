
@observer(['ethcrow'])
export default class Ethcrow {
  componentWillMount() {
    this.props.ethcrow.initialize();
  }
  render() {
    return React.Children.only(this.props.children);
  }
}
