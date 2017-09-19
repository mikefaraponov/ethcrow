import {withRouter} from 'react-router-dom';

@withRouter
@observer(['ethcrow'])
export default class ContractView extends React.Component {
  componentWillMount() {
    this.props.contract.fetch(this.props.match.params.address);
    this.fileAdded = this.props.contract.onFileAdded();
    this.statusChanged = this.props.contract.onStatusChanged();
  }
  componentWillUnmount() {
    this.fileAdded.removeAllListeners();
    this.statusChanged.removeAllListeners();
  }
  render() {
    return <section className="section">
      <div className="container">
        <div className="columns is-centered">
          <div className="column is-8">
            <div className="field">
              <label className="label">From</label>
              <div className="control">
                <input disabled className="input" type="text" value="0x2ff4d83d13fb20b88614fbe38aaceaadad9d53fc"/>
              </div>
            </div>
            <div className="field">
              <label className="label">To</label>
              <div className="control">
                <input disabled className="input" type="text" value="You"/>
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
                  <input className="input" type="tel" value="100" disabled/>
                </p>
              </div>
            </div>
            <div className="field is-expanded">
              <label className="label">Items</label>
              <div className="field has-addons">
                <p className="control is-expanded">
                  No files awailable now
                </p>
              </div>
            </div>
            <br/>
            <div className="field is-grouped">
              <p className="control">
                <a className="button is-success">
                  Aprove
                </a>
              </p>
              <p className="control">
                <a className="button is-danger">
                  Reject
                </a>
              </p>
              <p className="control">
                <button className="button is-light"
                  onClick={() => this.props.history.goBack()}>
                  Back
                </button>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>;
  }
}
