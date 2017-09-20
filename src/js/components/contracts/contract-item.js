import newItem from 'images/new.svg';
import xButton from 'images/x-button.svg';
import checked from 'images/check.svg';
import file from 'images/file.svg';
// import {observer} from 'mobx-react';

// @observer
export default class ContractItem extends React.Component {
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
          <figure className="image is-64x64">
            <img
              src={getImageByStatus('NEW')}
              alt="Status"/>
          </figure>
        </div>
        <div className="media-right">
          <div className="content">
            <p>
              From <strong title="">{from}</strong>
              <br/>
              To <strong title="">{to}</strong>
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
