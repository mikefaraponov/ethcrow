import Landing from 'components/landing';
import Contracts from 'components/contracts';
import Keys from 'components/keys';
import About from 'components/about';
import {Route, Redirect, Switch} from 'react-router-dom';

export default function Main() {
  return <main id="content">
    <Switch>
      <Route exact path="/" component={Landing}/>
      <Route path="/contracts" component={Contracts}/>
      <Route path="/keys" component={Keys}/>
      <Route path="/about" component={About}/>
      <Redirect to="/not-found"/>
    </Switch>
  </main>;
}
