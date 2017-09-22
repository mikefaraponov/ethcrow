import {observer, inject} from 'mobx-react';

@observer
export default class Status extends React.Component {
  displayNone = {
    display: 'none',
  };
  render() {
    return <div>
      <div className="notification is-danger response"
        style={!this.props.error && this.displayNone || null}>
        {this.props.error.text || 'Something went wrong :('}
      </div>
      <div className="notification is-success response"
        style={!this.props.result && this.displayNone || null}>
        Thanks for your attention :)
      </div>
    </div>
  }
}
