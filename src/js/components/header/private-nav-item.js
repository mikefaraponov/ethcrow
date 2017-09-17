import {NavLink} from 'react-router-dom';

export default function PrivateNavItem({to, text, auth}) {
  if (auth) {
    return <NavLink to={to} className="nav-item" activeClassName="is-active">
      {text}
    </NavLink>;
  } else {
    return null;
  }
}
