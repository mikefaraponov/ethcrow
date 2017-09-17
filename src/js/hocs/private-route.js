import {Route, Redirect} from 'react-router-dom';

export default function PrivateRoute({auth, component: Component, ...props}) {
  const render = (props) => auth ? <Component {...props}/> : (
    <Redirect to="/"/>
  );
  return <Route {...props} render={render}/>
}
