import Logo from 'components/header/logo';
import NavToggle from 'components/header/nav-toggle';
import Navigation from 'components/header/navigation';
import {connect} from 'react-redux';
// import {session} from 'actions';
// @connect((props) => ({
//   isLoading: props.loading.signUpLoading,
//   auth: !!props.session.currentUser,
// }), {
//   onSignUp: session.signUpUser,
//   onSignOut: session.signOutUser,
// })
export default class SmartHeader extends React.Component {
  render() {
    return <nav className="nav">
      <div className="container">
        <Logo/>
        <NavToggle/>
        <Navigation
          auth={this.props.auth || true}
          isLoading={this.props.isLoading}
          onSignUp={this.props.onSignUp}
          onSignOut={this.props.onSignOut}
        />
      </div>
    </nav>;
  }
}
