import Header from 'components/header';
import Footer from 'components/footer';
import {Route, Switch, Redirect} from 'react-router-dom';
import Sync from 'components/sync';
import Landing from 'components/landing';
import autobind from 'autobind-decorator';
import {connect} from 'react-redux';
import {ifAuthenticated, ifNotAuthenticated} from 'hocs/secure';
import {auth} from 'actions';

@connect((props) => ({
  isAuthenticated: props.profile.auth,
}), {
  onSignUp: auth.signUp,
  onSignOut: auth.signOut,
})
@autobind
export default class App extends React.Component {
  @ifAuthenticated('/dashboard')
  renderLanding() {
      return <Landing onSignUp={this.props.onSignUp}/>;
  }
  @ifNotAuthenticated('/')
  renderSync() {
    return <Sync/>;
  }
  @ifNotAuthenticated('/')
  renderDashboard() {
    return null;
  }
  render() {
    return <div id="app">
      <Header onSignUp={this.props.onSignUp}/>
      <Switch>
        <Route exact path="/" render={this.renderLanding}/>
        <Route exact path="/sync" render={this.renderSync}/>
        <Route exact path="/dashboard" render={this.renderDashboard}/>
        <Redirect to='/not-found'/>
      </Switch>
      <Footer/>
    </div>;
  }
}

