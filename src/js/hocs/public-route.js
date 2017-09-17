import {Route, Redirect} from 'react-router-dom';

export default function PublicRoute({auth, component: Component, ...props}) {
  const render = (props) => auth ? <Redirect to="/contracts"/> : (
    <Component {...props}/>
  );
  return <Route {...props} render={render}/>
}
