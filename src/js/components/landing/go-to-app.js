import wallet from 'images/eth.png';
import {Link} from 'react-router-dom';

export default function GoToApp() {
  return <section className="container has-text-centered">
    <p>
      <Link
        to="/contracts"
        className="button is-large is-info">
        <span className="icon">
          <i className="fa fa-sign-in"/>
        </span>
        <span>Go to app</span>
      </Link>
    </p>
    <br/>
    <figure className="content image">
      <img src={wallet}/>
    </figure>
  </section>;
}
