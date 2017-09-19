import Landing from 'components/landing';
import Contracts from 'components/contracts';
import {Route, Redirect, Switch} from 'react-router-dom';

export default function Main() {
  return <main id="content">
    <Switch>
      <Route exact path="/" component={Landing}/>
      <Route path="/contracts" component={Contracts}/>
      <Redirect to="/not-found"/>
    </Switch>
  </main>;
}
