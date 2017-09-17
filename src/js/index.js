import 'scss/main.scss';
import {createLogger} from 'redux-logger';
import {render} from 'react-dom';
import {Provider} from 'react-redux';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import {createStore, applyMiddleware} from 'redux';
// import complexReducer from 'reducers';
import App from 'containers/app';
import NoMatch from 'components/layout/no-match';
// import {parseRedirectResult} from 'actions/signup';
// import authStatus from 'middleware/auth-status';
// import networkStatus from 'middleware/network-status';
// import thunk from 'redux-thunk';

// const middlewares = [thunk, authStatus, networkStatus];

// if (process.env.NODE_ENV !== 'production') {
//   middlewares.push(createLogger());
// }

// const store = createStore(complexReducer, applyMiddleware(...middlewares));

// if (store.getState().loading.signUpLoading) {
//   store.dispatch(parseRedirectResult());
// } else {
//   store.dispatch(onAuthStateListen());
// }

// function onAuthStateListen() {
//   return {type: LISTEN_ON_AUTH_STATE_CHANGE};
// }
//
// <Provider store={store}>
// </Provider>

render(<BrowserRouter>
  <Switch>
    <Route exact path="/not-found" component={NoMatch}/>
    <Route path="/" component={App}/>
  </Switch>
</BrowserRouter>, document.getElementById('root'));
