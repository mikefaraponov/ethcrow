import ContractsList from 'components/contracts/contracts-list';
import ContractView from 'components/contracts/contract-view';
import CreateContract from 'components/contracts/create-contract';
import {Switch, Route} from 'react-router-dom';

export default class Contracts extends React.Component {
  render() {
    return <Switch>
      <Route exact path="/contracts" component={ContractsList}/>
      <Route exact path="/contracts/create" component={CreateContract}/>
      <Route path="/contracts/:id" component={ContractView}/>
    </Switch>;
  }
}
