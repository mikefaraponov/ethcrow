import ContractItem from 'components/contracts/contract-item';
import {Link} from 'react-router-dom';
// import {observer} from 'mobx-react';

// @observer(['contracts'])
export default class ContractsList extends React.Component {
  componentWillMount() {
    // this.props.contracts.fetch();
    // this.contractAdded = this.props.contracts.onContractAdded();
  }
  componentWillUnmount() {
    // this.contractAdded.removeAllListeners();
  }
  render() {
    const contracts = [];
    return <section className="section">
      <div className="container">
        <div className="columns is-centered">
        <div className="column is-8">
        <Link to="/contracts/create" className="button is-success">
          <span className="icon">
            <i className="fa fa-plus-circle"/>
          </span>
          <span>Create new contract</span>
        </Link>
        </div>
        </div>
        <div className="columns is-centered">
          <div className="column is-8">
            {
              true ? (contracts.length ?
              contracts.map((contract) => <ContractItem
                contract={contract}
                key={contract.id}
              />) : <div>NoContracts</div>) : <div>Loading . . .</div>
            }
          </div>
        </div>
      </div>
    </section>;
  }
}
