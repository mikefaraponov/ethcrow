import 'scss/main.scss';
import {render} from 'react-dom';
import {Provider} from 'mobx-react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import AppShell from 'components/app/app-shell';
import NoMatch from 'components/app/no-match';
import Initializator from 'components/app/initializator';
import Demo from 'components/demo';
import stores from 'stores';

render(<Provider {...stores}>
  <Initializator>
    <BrowserRouter>
      <Switch>
        <Route exact path="/not-found" component={NoMatch}/>
        <Route path="/" component={AppShell}/>
      </Switch>
    </BrowserRouter>
  </Initializator>
</Provider>, document.getElementById('root'));
