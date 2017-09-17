import SmartHeader from 'containers/smart-header';
import Footer from 'components/layout/footer';
import Sync from 'containers/sync';
import Landing from 'containers/landing';
import Contracts from 'containers/contracts';
import Profile from 'containers/profile';
import PrivateRoute from 'hocs/private-route';
import PublicRoute from 'hocs/public-route';
import {connect} from 'react-redux';
import {Switch, Redirect} from 'react-router-dom';

// @connect((props) => ({
//   auth: !!props.session.currentUser,
//   isSync: props.blockchain.sync,
// }))
export default class App extends React.Component {
  renderApp(auth=true) {
    return <div id="app">
      <SmartHeader/>
      <main id="content">
        <Switch>
          <PublicRoute exact path="/" component={Landing} auth={auth}/>
          <PrivateRoute path="/contracts" component={Contracts} auth={auth}/>
          <PrivateRoute exact path="/profile" component={Profile} auth={auth}/>
          <Redirect to="/not-found"/>
        </Switch>
      </main>
      <Footer/>
    </div>;
  }
  render() {
    const {auth, isSync} = this.props;
    return isSync ? <Sync/> : this.renderApp(auth);
  }
}
