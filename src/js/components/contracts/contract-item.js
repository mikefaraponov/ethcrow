import newItem from 'images/new.svg';
import xButton from 'images/x-button.svg';
import checked from 'images/check.svg';
import file from 'images/file.svg';
import {observer, inject} from 'mobx-react';
import {web3} from 'utils/web3';
import {Link} from 'react-router-dom';

@observer
export default class ContractItem extends React.Component {
  static toContract(contract) {
    return <ContractItem
      contract={contract}
      key={Math.random()}
    />;
  }
  componentWillMount() {
    this.fileAdded = this.props.contract.onFileAdded();
    this.stateChanged = this.props.contract.onStateChanged();
  }
  componentWillUnmount() {
    this.fileAdded.stopWatching(console.info);
    this.stateChanged.stopWatching(console.info);
  }
  render() {
    return <Link
      to={`/contracts/${this.props.contract.address}`}
      className="box">
      <article className="media">
        <div className="media-left">
          <figure className="image is-96x96">
            <img
              src={getImageByStatus(
                  this.props.contract.state,
                  this.props.contract.toMe)}
              alt="Status"/>
          </figure>
        </div>
        <div className="media-right content contract-elips">
          Address <strong>{this.props.contract.address}</strong>
          <br/>
          Consumer <strong>{this.props.contract.consumer}</strong>
          <br/>
          Producer <strong>{this.props.contract.producer}</strong>
          <br/>
          Price <strong>{web3.utils.fromWei(this.props.contract.price, 'ether')} ETH</strong>
        </div>
      </article>
    </Link>;
  }
}

function getImageByStatus(status, toMe) {
  console.log(toMe);
  if (status === 0 && toMe) {
    return newItem;
  } else if (status === 2) {
    return xButton;
  } else if (status === 1) {
    return checked;
  } else if (status === 0) {
    return file;
  }
}
