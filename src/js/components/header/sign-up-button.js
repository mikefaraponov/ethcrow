import classnames from 'classnames';

export default function SignUpButton({isLoading, auth, onSignUp, onSignOut}) {
  const buttonClass = classnames('button is-info', {
    'is-loading': isLoading,
  });
  const iconClass = classnames('fa', {
    'fa-google': !auth,
    'fa-sign-out': auth,
  });
  return <span className="nav-item">
    <a className={buttonClass} onClick={auth ? onSignOut : onSignUp}>
      <span className="icon">
        <i className={iconClass}/>
      </span>
      <span>{auth ? 'Sign out' : 'Sign up'}</span>
    </a>
  </span>;
}
