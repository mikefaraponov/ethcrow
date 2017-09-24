import {observer, inject} from 'mobx-react';
import classnames from 'classnames';

@inject('keys')
@observer
export default class Keys extends React.Component {
  render() {
    const regenerate = classnames('button is-danger', {
      'is-loading': this.props.keys.loadingKeys,
    })
    return <section className="section">
      <div className="container">
        <div className="columns is-centered mobile">
          <div className="column is-8">
            <div className="content">
              <h1 className="title ethcrow-title">Import keys</h1>
              <p>To encrypt your files you need a key pair <small className="is-gray">
                (Public/Private)
              </small><br/>Keys. could be imported or generated automaticaly
                * If you regenrate or import keys from outside d
              </p>
              <div className="field is-grouped">
                <p className="control">
                  <a className={regenerate}
                    disabled={this.props.keys.loadingKeys}
                    onClick={this.props.keys.regenerate}>
                    <span className="icon">
                      <i className="fa fa-refresh"></i>
                    </span>
                    <span>Regenarate keys</span>
                  </a>
                </p>
                <div className="file is-warning">
                  <label className="file-label" >
                    <input className="file-input"
                      onChange={this.props.keys.importKeys}
                      type="file"
                      name="keys"/>
                    <span className="file-cta">
                      <span className="file-icon">
                        <i className="fa fa-upload"/>
                      </span>
                      <span className="file-label">
                        Import keys
                      </span>
                    </span>
                  </label>
                </div>
              </div>
              <h1 className="title ethcrow-title">Export keys</h1>
              <p>You could export key to transfer to other web client</p>
              <div className="field is-grouped">
                <p className="control">
                  <a className="button is-info"
                    onClick={this.props.keys.exportKeys}>
                    <span className="icon">
                      <i className="fa fa-download"></i>
                    </span>
                    <span>Export keys</span>
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
  }
}
