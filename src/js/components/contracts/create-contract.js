import {observer, inject} from 'mobx-react';
import {withRouter} from 'react-router-dom';

@withRouter
@inject('contracts')
@observer
export default class CreateContract extends React.Component {
  onCreateContract = (ev) => {
    this.props.contracts.createContract(() => {
      alert('You should wait some time for contract to be mined!');
      this.props.history.push('/contracts');
    });
  }
  render() {
    return <section className="section">
      <div className="container">
        <div className="columns is-centered">
          <div className="column is-8">
            <div className="field">
              <label className="label">Consumer <small className="is-grey">(You)</small></label>
              <div className="control is-expanded">
                <div className="select is-fullwidth">
                  <select
                    onChange={this.props.contracts.select}
                    value={this.props.contracts.selected}>
                    {this.props.contracts.accounts.map((account) => {
                      return <option key={account} value={account}>
                        {account}
                      </option>;
                    })}
                  </select>
                </div>
              </div>
            </div>
            <div className="field">
              <label className="label">Producer</label>
              <div className="control">
                <input onChange={this.props.contracts.setProducer}
                  className="input"
                  type="text"
                  placeholder="Producer address"/>
              </div>
            </div>
            <div className="field is-expanded">
              <label className="label">Price</label>
              <div className="field has-addons">
                <p className="control">
                  <a className="button is-static">
                    ETH
                  </a>
                </p>
                <p className="control is-expanded">
                  <input
                    onChange={this.props.contracts.setAmountOfEther}
                    className="input"
                    type="tel"
                    placeholder="Amount of money hold in contract"
                  />
                </p>
              </div>
            </div>
            <hr/>
            <div className="field is-grouped">
              <div className="control">
                <button onClick={this.onCreateContract} className="button is-success">
                  Create
                </button>
              </div>
              <div className="control">
                <button className="button is-light"
                  onClick={() => this.props.history.goBack()}>
                  Back
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
  }
}
