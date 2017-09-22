import ContractItem from 'components/contracts/contract-item';
import {Link} from 'react-router-dom';
import {observer, inject} from 'mobx-react';

import reload from 'images/reload.svg';
import Replacer from 'components/contracts/replacer';
import ContractsList from 'components/contracts/contracts-list';

// @inject('contracts')
@observer
export default class ContractsManager extends React.Component {
  componentWillMount() {
    // this.props.contracts.fetch();
    // this.contractAdded = this.props.contracts.onContractAdded();
  }
  componentWillUnmount() {
    // this.contractAdded.removeAllListeners();
  }
  render() {
    const contracts = [
      // {
      //   status: 'NEW',
      //   from: '0xdfsdf',
      //   to: '0xdfsdf',
      //   id: 1,
      // },
      // {
      //   status: 'X',
      //   from: '0xdfsdf',
      //   to: '0xdfsdf',
      //   id: 2,
      // },{
      //   status: 'NEW',
      //   from: '0xdfsdf',
      //   to: '0xdfsdf',
      //   id: 3,
      // },{
      //   status: 'NEW',
      //   from: '0xdfsdf',
      //   to: '0xdfsdf',
      //   id: 4,
      // },{
      //   status: 'SUCCESS',
      //   from: '0xdfsdf',
      //   to: '0xdfsdf',
      //   id: 5,
      // },{
      //   status: 'SUCCESS',
      //   from: '0xdfsdf',
      //   to: '0xdfsdf',
      //   id: 6,
      // },{
      //   status: 'PENDING',
      //   from: '0xdfsdf',
      //   to: '0xdfsdf',
      //   id: 7,
      // }
    ];
    return <section className="section contracts">
        <div className="columns is-centered">
          <div className="column is-8">
            <div className="field is-grouped">
              <p className="control">
                <Link to="/contracts/create" className="button is-success">
                  <span className="icon">
                    <i className="fa fa-plus-circle"/>
                  </span>
                  <span>Add Escrow</span>
                </Link>
              </p>
            </div>
            <hr className="is-marginless"/>
          </div>
        </div>
        {this.isLoading || true ?
          <Replacer image={reload}/> :
          <ContractsList contracts={contracts}/>
        }
    </section>;
  }
}

