import {connect} from 'react-redux';
import actions from 'actions';
import {pick, identity} from 'ramda';
import {Route, Switch} from 'react-router-dom';

@connect(
	identity,
	pick([], actions)
)
export default class App extends React.Component {
	render() {
		return <div role="main">
			<Header/>
			<Main/>
			<Footer/>
		</div>;
	}
}
