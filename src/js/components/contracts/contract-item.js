import newItem from 'images/new.svg';
import xButton from 'images/x-button.svg';
import checked from 'images/check.svg';
import file from 'images/file.svg';
import {observer} from 'mobx-react';

@observer
export default class ContractItem extends React.Component {
  static toContract(contract) {
    return <ContractItem
      contract={contract}
      key={contract.id}
    />;
  }
  componentWillMount() {
    // this.fileAdded = this.props.contract.onFileAdded();
    // this.statusChanged = this.props.contract.onStatusChanged();
  }
  componentWillUnmount() {
    // this.fileAdded.removeAllListeners();
    // this.statusChanged.removeAllListeners();
  }
  render() {
    return <div className="box">
      <article className="media">
        <div className="media-left">
          <figure className="image is-96x96">
            <img
              src={getImageByStatus(this.props.contract.status)}
              alt="Status"/>
          </figure>
        </div>
        <div className="media-right">
          <div className="content">
            <p>
              Address <strong>{this.props.contract.from}</strong>
              <br/>
              From <strong>{this.props.contract.from}</strong>
              <br/>
              To <strong>{this.props.contract.to}</strong>
              <br/>
              Price <strong>0.05 ETH</strong>
            </p>
          </div>
        </div>
      </article>
    </div>;
  }
}

function getImageByStatus(status) {
  if (status === 'NEW') {
    return newItem;
  } else if (status === 'X') {
    return xButton;
  } else if (status === 'SUCCESS') {
    return checked;
  } else if (status === 'PENDING') {
    return file;
  }
}
