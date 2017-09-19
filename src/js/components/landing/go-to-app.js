import wallet from 'images/eth.png';
import {Link} from 'react-router-dom';

export default function GoToApp() {
  return <section className="container content has-text-centered">
    <p>
      <Link
        to="/contracts"
        className="button is-large is-info">
        <span className="icon">
          <i className="fa fa-envelope-open"/>
        </span>
        <span>Go to app</span>
      </Link>
    </p>
    <figure className="content image">
      <img src={wallet}/>
    </figure>
  </section>;
}
