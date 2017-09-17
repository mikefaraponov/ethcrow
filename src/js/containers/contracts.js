import autobind from 'autobind-decorator';
import ContractsList from 'components/contracts/contracts-list';
import ContractView from 'components/contracts/contract-view';
import CreateContract from 'components/contracts/create-contract';
import {connect} from 'react-redux';
import {Switch, Route} from 'react-router-dom';

// @connect((x) => x, {})
@autobind
export default class Contracts extends React.Component {
  viewContractsList(props) {
    return <ContractsList isLoading={false}/>
  }
  viewContract(props) {
    return <ContractView isLoading={false}/>
  }
  createContract(props) {
    return <CreateContract isLoading={false}/>
  }
  render() {
    return <Switch>
      <Route exact path="/contracts" render={this.viewContractsList}/>
      <Route exact path="/contracts/create" render={this.createContract}/>
      <Route path="/contracts/:id" render={this.viewContract}/>
    </Switch>;
  }
}
