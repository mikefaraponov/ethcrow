import wallet from 'images/eth.png';
import classnames from 'classnames';

export default function SignUp({onSignUp, isLoading}) {
  const buttonClass = classnames('button is-large is-info', {
    'is-loading': isLoading,
  });
  return <section className="container content has-text-centered">
    <p>
      <a onClick={onSignUp} className={buttonClass}>
        <span className="icon">
          <i className="fa fa-google"></i>
        </span>
        <span>Sign Up</span>
      </a>
    </p>
    <figure className="content image">
      <img src={wallet}/>
    </figure>
  </section>;
}
