import {inject, observer} from 'mobx-react';
import reload from 'images/reload.svg';
import Replacer from 'components/contracts/replacer';

@inject('ipfs', 'keys', 'counter', 'contracts')
@observer
export default class Initializator extends React.Component {
  componentWillMount() {
    this.props.ipfs.initialize();
    this.props.keys.initialize();
    this.props.counter.initialize();
    this.props.contracts.initialize();
  }
  render() {
    const conditions = [
      this.props.ipfs.loading,
      this.props.keys.loading,
      this.props.contracts.loading,
    ];
    if (conditions.includes(true)) {
      return <section className="hero is-fullheight">
        <div className="hero-body">
          <div className="container has-text-centered">
            <Replacer image={reload}/>
          </div>
        </div>
      </section>;
    } else {
      return React.Children.only(this.props.children);
    }
  }
}
