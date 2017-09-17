import classnames from 'classnames';
import NavItem from './nav-item';
import PrivateNavItem from './private-nav-item';
import NavContracts from './nav-contracts';
import SignUpButton from './sign-up-button';

export default function Navigation({
  isLoading,
  auth,
  onSignUp,
  onSignOut,
}) {
  return <div className="nav-right nav-menu">
    <NavItem to="/demo" text="Demo"/>
    <NavItem to="/blog" text="Blog"/>
    <PrivateNavItem to="/profile" text="Profile" auth={auth}/>
    <NavContracts contractsCount={0} auth={auth}/>
    <SignUpButton
      isLoading={isLoading}
      onSignUp={onSignUp}
      onSignOut={onSignOut}
      auth={auth}
    />
  </div>;
}


