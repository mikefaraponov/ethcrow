import wallet from 'images/eth.png';

export default function SignUp({onSignUp}) {
  return <section className="container content has-text-centered">
    <p>
      <a onClick={onSignUp} className="button is-large is-info">
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
