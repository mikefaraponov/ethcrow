import notFound from 'images/not-found.svg';
import {Link} from 'react-router-dom';

export default function NoMatch() {
  return <section className="hero is-fullheight">
    <div className="hero-body">
      <div className="container has-text-centered">
        <img className="image is-inline" src={notFound}/>
        <p>
          <Link className="button is-info is-outlined" to="/">
            <span className="icon">
              <i className="fa fa-arrow-left"/>
            </span>
            <span>Back to Home</span>
          </Link>
        </p>
      </div>
    </div>
  </section>;
}
