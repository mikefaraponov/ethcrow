import 'scss/main.scss';
import thunk from 'redux-thunk';
import {createLogger} from 'redux-logger';
import {render} from 'react-dom';
import {Provider} from 'react-redux';
import {HashRouter, Route, Switch} from 'react-router-dom';
import {createStore, applyMiddleware, compose} from 'redux';
import App from 'containers/app';
import NoMatch from 'components/no-match';
import complexReducer from 'reducers';
import peer from 'middleware/simple-peer';
import firebase from 'firebase';

firebase.initializeApp(FIREBASE_CONFIG);

const middlewares = [thunk, peer];

// server sends encrypted token using public key and want you to unencrypt it using your private key
// than while you not unencrypt it server not allow you to signalling
if (process.env.NODE_ENV !== 'production') {
  middlewares.push(createLogger());
}

const store = createStore(
  complexReducer,
  applyMiddleware(...middlewares)
);

const root = document.getElementById('root');

const Root = () => (
  <Provider store={store}>
    <HashRouter>
      <Switch>
        <Route path="/" component={App}/>
        <NoMatch/>
      </Switch>
    </HashRouter>
  </Provider>
);

render(<Root/>, root);
