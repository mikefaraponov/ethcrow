import 'scss/main.scss';
import thunk from 'redux-thunk';
import {createLogger} from 'redux-logger';
import {render} from 'react-dom';
import {Provider} from 'react-redux';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import {createStore, applyMiddleware} from 'redux';
import complexReducer from 'reducers';
import App from 'containers/app';
import NoMatch from 'components/no-match';
import firebase from 'utils/firebase';

const middlewares = [thunk];

if (process.env.NODE_ENV !== 'production') {
  middlewares.push(createLogger());
}

const withMiddlewares = applyMiddleware(...middlewares);

const store = createStore(complexReducer, withMiddlewares);

const auth = firebase.auth();

auth.getRedirectResult();

auth.onAuthStateChanged((user) => {
  store.dispatch({user});
});

const root = document.getElementById('root');

const Root = () => (
  <Provider store={store}>
    <BrowserRouter>
      <Switch>
        <Route exact path="/not-found" component={NoMatch}/>
        <Route path="/" component={App}/>
      </Switch>
    </BrowserRouter>
  </Provider>
);

render(<Root/>, root);
