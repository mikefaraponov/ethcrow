import ContractItem from 'components/contracts/contract-item';
import Replacer from 'components/contracts/replacer';
import empty from 'images/empty.svg';
import {observer, inject} from 'mobx-react';

@observer
export default class ContractsList extends React.Component {
  render() {
    if (this.props.contracts.length > 0) {
      return <div className="columns is-centered">
        <div className="column is-8">
          {this.props.contracts.map(ContractItem.toContract)}
        </div>
      </div>;
    } else {
      return <Replacer image={empty}/>
    }
  }

}
