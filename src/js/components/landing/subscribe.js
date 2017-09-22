import {observer, inject} from 'mobx-react';
import classnames from 'classnames';
import Status from 'components/landing/status';

@inject('newsletter')
@observer
export default class Subscribe extends React.Component {
  render() {
    const subscribeButton = classnames('button is-white is-outlined', {
      'is-loading': this.props.newsletter.pending,
    });
    return <section className="hero is-info">
      <div className="hero-body">
        <div className="container">
          <div className="columns is-vcentered">
            <div className="column is-one-third is-left">
              <p className="title">Ethcrow <strong>Newsletter</strong></p>
              <p className="subtitle">Get notified when v1 is ready!</p>
            </div>
            <div className="column">
              <div className="field is-grouped">
                <div className="control has-icons-left is-expanded">
                  <input
                    onChange={this.props.newsletter.onEmailInput}
                    type="email"
                    className="input is-flat required email"
                    placeholder="Email address"
                    required
                    disabled={this.props.newsletter.result}
                  />
                  <span className="icon is-small is-left">
                    <i className="fa fa-envelope"/>
                  </span>
                </div>
                <div className="control">
                  <a className={subscribeButton}
                    disabled={this.props.newsletter.result}
                    onClick={this.props.newsletter.subscribe}>Subscribe</a>
                </div>
              </div>
              <Status
                result={this.props.newsletter.result}
                error={this.props.newsletter.error}
              />
            </div>
          </div>
        </div>
      </div>
    </section>;
  }
}
