import ContractsManager from 'components/contracts/contracts-manager';
import ContractView from 'components/contracts/contract-view';
import CreateContract from 'components/contracts/create-contract';
import {Switch, Route} from 'react-router-dom';

export default class Contracts extends React.Component {
  render() {
    return <Switch>
      <Route exact path="/contracts" component={ContractsManager}/>
      <Route exact path="/contracts/create" component={CreateContract}/>
      <Route path="/contracts/:address" component={ContractView}/>
    </Switch>;
  }
}
