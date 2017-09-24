import {withRouter} from 'react-router-dom';
import {observer, inject} from 'mobx-react';
import {web3} from 'utils/web3';


@withRouter
@observer
class SoloContract extends React.Component {
  componentWillMount() {
    this.fileAdded = this.props.contract.onFileAdded();
    this.statusChanged = this.props.contract.onStateChanged();
  }
  componentUnWillMount() {
    this.fileAdded.stopWatching(console.log)
    this.statusChanged.stopWatching(console.log)
  }
  render() {
    return <div className="columns is-centered">
        <div className="column is-8">
          <div className="field">
            <label className="label">Consumer</label>
            <div className="control">
              <input disabled className="input" type="text"
                value={this.props.contract.consumer}/>
            </div>
          </div>
          <div className="field">
            <label className="label">Producer</label>
            <div className="control">
              <input disabled className="input" type="text"
                value={this.props.contract.producer}/>
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
                <input className="input" type="tel"
                  value={web3.utils.fromWei(this.props.contract.price, 'ether')} disabled/>
              </p>
            </div>
          </div>
          <div className="field is-expanded">
            <label className="label">Items</label>
            <div className="field has-addons">
              {
                this.props.contract.files.length ? <ul>
                  {this.props.contract.files.map((f) => {
                      return <li key={f.path}><a href={`https://ipfs.io/ipfs/${f.path}`}>
                        {f.path}
                      </a></li>;
                  })}
                </ul> : <p className="control is-expanded">
                    No files
                  </p>
              }
            </div>
          </div>
          <br/>
          <div className="field is-grouped">
          {
            this.props.contract.toMe &&
            this.props.contract.state === 0 && <div className="control"><div className="file is-success">
                <label className="file-label" >
                  <input className="file-input"
                    onChange={this.props.contract.addFile}
                    type="file"
                    name="keys"/>
                  <span className="file-cta">
                    <span className="file-icon">
                      <i className="fa fa-upload"/>
                    </span>
                    <span className="file-label">
                      Add File
                    </span>
                  </span>
                </label>
              </div></div>
          }
          {this.props.contract.toMe ?
              this.props.contract.state === 0 && <p className="control">
                <a onClick={this.props.contract.reject}
                  className="button is-danger">
                  Reject
                </a>
              </p> :
              this.props.contract.state === 0 && <p className="control">
                <a
                  onClick={this.props.contract.accept}
                  className="button is-success">
                  Aprove
                </a>
              </p>
          }
            <p className="control">
              <button className="button is-light"
                onClick={() => this.props.history.goBack()}>
                Back
              </button>
            </p>
          </div>
        </div>
      </div>
  }
}

@withRouter
@inject('contract')
@observer
export default class ContractView extends React.Component {
  componentWillMount() {
    this.props.contract.fetch(this.props.match.params.address);
  }
  render() {
    return <section className="section">
      <div className="container">
        {this.props.contract.loadingContract ?
            null :
            <SoloContract contract={this.props.contract.contract}/>}
      </div>
    </section>;
  }
}

