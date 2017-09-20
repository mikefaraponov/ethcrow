import notFound from 'images/not-found.svg';
import {withRouter} from 'react-router-dom';

@withRouter
export default class NoMatch extends React.Component {
  goBack = () => this.props.history.goBack();
  render() {
    return <section className="hero is-fullheight">
      <div className="hero-body">
        <div className="container has-text-centered">
          <img className="image is-inline" src={notFound}/>
          <p>
            <a onClick={this.goBack}
              className="button is-info is-outlined">
              <span className="icon">
                <i className="fa fa-arrow-left"/>
              </span>
              <span>Go Back</span>
            </a>
          </p>
        </div>
      </div>
    </section>;
  }
}
